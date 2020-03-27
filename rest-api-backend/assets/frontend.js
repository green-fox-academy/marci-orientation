/**
 * Created by aze on 2017.05.09..
 * If you want to refactor it, please try it out.
 * Have a backend and check if it's working with it how it was working with the previous version.
 */

class EndpointValidation {
  constructor(method, path, resolve) {
    this.method = method;
    this.path = path;
    this.resolve = resolve;
    this.errors = [];
    this.data = { request: {} };
  }

  requestBody(requestBody) {
    this.data = { request: requestBody };
    return this;
  }

  validations(validations) {
    this.validations = validations;
    return this;
  }

  async start() {
    try {
      const result = await fetch(this.path, this.createRequestOptions());
      this.data.status = result.status;
      this.data.type = result.status < 400 ? "response" : "error";

      const data = await result.json();
      this.data.response = data;
    } catch (error) {
      this.data.response = error;
      this.data.type = "error";
      this.error = error;
    }

    this.validate();
    this.resolve(this.path, this.getStyle(), this.getContent(this.error));
  }

  createRequestOptions() {
    let options = {
      method: this.method,
      headers: { "content-type": "application/json" },
    };
    if (this.method === "post") {
      options.body = JSON.stringify(this.data.request);
    }
    return options;
  }

  validate() {
    for (let [field, expected] of Object.entries(this.validations)) {
      console.log(`Validating ${field} must be`, expected);
      if (
        this.data[field] !== expected &&
        this.data.response[field] !== expected
      ) {
        this.errors.push(field);
      }
    }
  }

  isValid() {
    return this.errors.length === 0;
  }

  getStyle() {
    return this.isValid() ? "success" : "danger";
  }

  getContent(error) {
    const { request, response } = this.data;
    const { method, path, errors, validations } = this;
    const message = this.getMessage();

    let content = `<code>${method.toUpperCase()} ${path}</code> `;
    content +=
      Object.keys(request).length !== 0
        ? `with the input ${JSON.stringify(request)}`
        : "";
    content += `<h3>${message} with status ${this.data.status}</h3>`;
    content +=
      Object.keys(response).length !== 0
        ? `Received response: ${JSON.stringify(response)}`
        : "";

    content += "<ul>";
    if (error) {
      content += `<li>${error}</li>`;
    } else {
      content += errors
        .map(
          (key) =>
            `<li><code>${key}</code> is not equal to ${validations[key]}</li>`
        )
        .join("");
    }
    content += "</ul>";

    return content;
  }

  getMessage() {
    const messageTypes = {
      response: (result) =>
        result ? "Correct successful response" : "Incorrect response",
      error: (result) =>
        result ? "Correct error response" : "Unexpected error response",
    };
    return messageTypes[this.data.type](this.isValid());
  }

  static validateEndpoint({
    method,
    path,
    expected,
    requestBody = {},
    resolve = addResult,
  }) {
    new EndpointValidation(method, path, resolve)
      .validations(expected)
      .requestBody(requestBody)
      .start();
  }
}

class JQueryMini {
  constructor(elements) {
    this.elements = elements;
  }

  on(event, listener) {
    this.forEach((element) => element.addEventListener(event, listener));
    return this;
  }

  toggleClass(klass) {
    this.forEach((element) => element.classList.toggle(klass));
    return this;
  }

  find(selector) {
    return new JQueryMini(
      this.elements.flatMap((element) =>
        Array.from(element.querySelectorAll(selector))
      )
    );
  }

  closest(selector) {
    return new JQueryMini(
      this.elements.map((element) => element.closest(selector))
    );
  }

  append(html) {
    this.forEach((element) => (element.innerHTML += html));
    return this;
  }

  remove() {
    this.forEach((element) => element.remove());
  }

  forEach(callback) {
    this.elements.forEach(callback);
    return this;
  }

  static find(selector) {
    if (typeof selector === "string")
      return new JQueryMini(Array.from(document.querySelectorAll(selector)));
    return new JQueryMini([selector]);
  }
}

function addResult(path, style, content) {
  const id = path.substr(1).split(/[\?\/]/)[0];
  const ulEl = find(`#${id}_response`);
  ulEl.append(`
  <div class="alert alert-${style} alert-dismissible" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
  </button>
  ${content}
  </div>`);
  ulEl
    .find("button")
    .on("click", (e) => find(e.target).closest(".alert").remove());
}

const find = JQueryMini.find;
const validateEndpoint = EndpointValidation.validateEndpoint;

find("#doubling")
  .toggleClass("disabled")
  .on("click", () => {
    validateEndpoint({
      method: "get",
      path: "/doubling",
      expected: {
        error: "Please provide an input!",
        status: 200,
      },
    });

    validateEndpoint({
      method: "get",
      path: "/doubling?input=5",
      expected: {
        received: 5,
        result: 10,
        status: 200,
      },
    });
  });

find("#greeter")
  .toggleClass("disabled")
  .on("click", () => {
    validateEndpoint({
      method: "get",
      path: "/greeter",
      expected: {
        error: "Please provide a name and a title!",
        status: 400,
      },
    });

    validateEndpoint({
      method: "get",
      path: "/greeter?name=Vader",
      expected: {
        error: "Please provide a title!",
        status: 400,
      },
    });

    validateEndpoint({
      method: "get",
      path: "/greeter?name=Vader&title=Sith",
      expected: {
        welcome_message: "Oh, hi there Vader, my dear Sith!",
        status: 200,
      },
    });
  });

find("#appenda")
  .toggleClass("disabled")
  .on("click", () => {
    validateEndpoint({
      method: "get",
      path: "/appenda",
      expected: {
        status: 404,
      },
    });

    validateEndpoint({
      method: "get",
      path: "/appenda/kuty",
      expected: {
        appended: "kutya",
        status: 200,
      },
    });
  });

find("#dountil")
  .toggleClass("disabled")
  .on("click", () => {
    validateEndpoint({
      method: "post",
      path: "/dountil/sum",
      requestBody: { until: 7 },
      expected: {
        result: 28,
        status: 200,
      },
    });

    validateEndpoint({
      method: "post",
      path: "/dountil/factor",
      requestBody: { until: 4 },
      expected: {
        result: 24,
        status: 200,
      },
    });
  });

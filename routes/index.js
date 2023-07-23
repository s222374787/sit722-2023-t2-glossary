var express = require("express");
var router = express.Router();

const vocabList = [
  {
    id: 1,
    term: "Waterfall Model",
    description:
      "A method of software development that has one team complete their work before passing it to the next until it reaches the end of the cycle and is released.",
    references:
      "Atlassian, https://www.atlassian.com/agile#:~:text=What%20is%20the%20Agile%20methodology,planning%2C%20executing%2C%20and%20evaluating, accessed 22 July 2023.",
  },
  {
    id: 2,
    term: "DevOps",
    description:
      "The combinations of Development and Operations as a single business culture. Reduces the barriers between developers and operations in a team so that products can be brought quicker to market and are easier to maintain and extend.",
    references:
      "Krief, M. 2022, Learning DevOps - Second Edition, Packt Publishing, viewed 22 July 2023, https://learning.oreilly.com/library/view/learning-devops/9781801818964/B17725_01_ePub.xhtml#_idParaDest-17",
  },
  {
    id: 3,
    term: "Microservice",
    description:
      "A small, independent self-contained software service. It should have a single, well-defined area of responsibility.",
    references:
      "Davis, A. 2021, Bootstrapping Microservices with Docker, Kubernetes and Terraform, Manning Publications, pp 6-7",
  },
  {
    id: 4,
    term: "Microservices Application",
    description:
      "An application composed of a front end that makes use of one or many small microservices to provide its functionality.",
    references:
      "Davis, A. 2021, Bootstrapping Microservices with Docker, Kubernetes and Terraform, Manning Publications, pp 7-8, 13",
  },
  {
    id: 5,
    term: "Cluster",
    description:
      "A group of computers or other resources working together as a single system.",
    references:
      "Davis, A. 2021, Bootstrapping Microservices with Docker, Kubernetes and Terraform, Manning Publications, p 8",
  },
  {
    id: 6,
    term: "Monolith Application",
    description:
      "An entire application that runs as a single piece of software. Any changes require the entire application to be redeployed to the user.",
    references:
      "Davis, A. 2021, Bootstrapping Microservices with Docker, Kubernetes and Terraform, Manning Publications, p 9",
  },
  {
    id: 7,
    term: "Domain Driven Design (DDD)",
    description:
      "A design paradigm that fits well with microservices design. The business concepts are modeled as independent boundary domains and could serve as a design for the independent microservices.",
    references:
      "Davis, A. 2021, Bootstrapping Microservices with Docker, Kubernetes and Terraform, Manning Publications, p 17",
  },
  {
    id: 8,
    term: "Loose Coupling",
    description:
      "The connection between services is minimal to none. Fully independent services can more easily be changed without affecting other services.",
    references:
      "Davis, A. 2021, Bootstrapping Microservices with Docker, Kubernetes and Terraform, Manning Publications, p 17",
  },
  {
    id: 9,
    term: "Agile Development",
    description:
      "A project management approach that uses smaller iterations of development and release for teams to collaboratively develop software.",
    references:
      "Atlassian, https://www.atlassian.com/agile#:~:text=What%20is%20the%20Agile%20methodology,planning%2C%20executing%2C%20and%20evaluating, accessed 22 July ",
  },
  {
    id: 10,
    term: "Cloud Native Applications",
    description:
      "Applications designed and developed to take advantage of cloud technologies. Some benefits include accelerated development, improved time to market,  and responsiveness to business needs.",
    references:
      "Goniwada, S. R. 2021, Cloud Native Architecture and Design: A Handbook for Modern Day Architectures and Design with Enterprise-Grade Examples, Apress, viewed 22 July 2023, https://learning.oreilly.com/library/view/cloud-native-architecture/9781484272268/html/511610_1_En_1_Chapter.xhtml#Sec5 ",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "DevOps Glossary", terms: vocabList });
});

module.exports = router;

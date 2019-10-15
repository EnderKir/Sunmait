//model
const model = {
  isMobileNavOpen: false,
  isDropdownOpen: false,
  checkMobileNav: function() {
    if (this.isMobileNavOpen === false) {
      view.addMobileNav();
      this.isMobileNavOpen = true;
    } else {
      view.removeMobileNav();
      this.isMobileNavOpen = false;
    }
  },
  checkDropdown: function() {
    if (this.isDropdownOpen == false) {
      view.addDropdown();
      this.isDropdownOpen = true;
    } else {
      view.removeDropdown();
      this.isDropdownOpen = false;
    }
  },
  checkBodyClick: function(e) {
    if (e.target.id != "openMobileNav") {
      if (this.isMobileNavOpen === true) {
        if (!e.target.closest(".mobile-navigation")) {
          view.removeMobileNav();
          this.isMobileNavOpen = false;
        }
      }
    }
  },
  createProjectElement: function(element) {
    const project = document.createElement("div");
    project.classList.add("project");
    const logoContainer = document.createElement("div");
    logoContainer.classList.add("project-logo-container");
    const icon = document.createElement("div");
    icon.classList.add("icon");
    icon.classList.add(`${element.iconClass}`);
    logoContainer.appendChild(icon);
    const projectTitle = document.createElement("div");
    projectTitle.classList.add("project-title");
    projectTitle.innerHTML = `${element.projectTitle}`;
    const projectDescription = document.createElement("p");
    projectDescription.classList.add("project-description");
    projectDescription.innerHTML = `${element.projectDescription}`;
    project.appendChild(logoContainer);
    project.appendChild(projectTitle);
    project.appendChild(projectDescription);
    view.addProject(project);
  }
};
//view
const view = {
  addMobileNav: function() {
    mobileNav.style.display = "flex";
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
  },
  removeMobileNav: function() {
    mobileNav.style.display = "none";
    document.getElementsByTagName("html")[0].style.overflow = "";
  },
  addDropdown: function() {
    dropdown.style.display = "flex";
    inputOpenBut.style.display = "none";
    inputCloseBut.style.display = "inline";
    inputCloseBut.classList.add("active");
  },
  removeDropdown: function() {
    dropdown.style.display = "none";
    inputOpenBut.style.display = "";
    inputCloseBut.style.display = "none";
    inputCloseBut.classList.remove("active");
  },
  addProject: function(project) {
    const container = document.getElementById("projects");
    container.appendChild(project);
  }
};
//controller
const controller = {
  openMobileNav: function() {
    model.checkMobileNav();
  },
  openSearchDropdown: function() {
    model.checkDropdown();
  },
  bodyClick: function(e) {
    model.checkBodyClick(e);
  },
  initProjects: function() {
    projectsArray.forEach(function callback(element) {
      model.createProjectElement(element);
    });
  }
};
const mobileNavBut = document.getElementById("openMobileNav");
const mobileNav = document.getElementById("mobile-navigation");
mobileNavBut.addEventListener("click", controller.openMobileNav);
const inputOpenBut = document.getElementById("search-input-open");
const inputCloseBut = document.getElementById("search-input-close");
const dropdown = document.getElementById("search-dropdown");
inputOpenBut.addEventListener("click", controller.openSearchDropdown);
inputCloseBut.addEventListener("click", controller.openSearchDropdown);
document.body.addEventListener("click", controller.bodyClick);
const projectsArray = [
  {
    iconClass: "logo-spring-boot",
    projectTitle: "Spring Boot",
    projectDescription: `Takes an opinionated view of building Spring applications and gets
  you up and running as quickly as possible.`
  },
  {
    iconClass: "logo-spring-framework",
    projectTitle: "Spring Framework",
    projectDescription: `Provides core support for dependency injection, transaction
  management, web apps, data access, messaging and more.`
  },
  {
    iconClass: "logo-spring-cloud-dataflow",
    projectTitle: "Spring Cloud Data Flow",
    projectDescription: `An orchestration service for composable data microservice
    applications on modern runtimes.`
  },
  {
    iconClass: "logo-spring-cloud",
    projectTitle: "Spring Cloud",
    projectDescription: `Provides a set of tools for common patterns in distributed
    systems. Useful for building and deploying microservices.`
  },
  {
    iconClass: "logo-spring-data",
    projectTitle: "Spring Data",
    projectDescription: `Provides a consistent approach to data access – relational,
    non-relational, map-reduce, and beyond.`
  },
  {
    iconClass: "logo-spring-integration",
    projectTitle: "Spring Integration",
    projectDescription: `Supports the well-known
    <em>Enterprise Integration Patterns</em> via lightweight messaging
    and declarative adapters.`
  }
];

window.addEventListener("load", controller.initProjects());

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
  }
};
//view
const view = {
  addMobileNav: function() {
    mobileNav.style.display = "flex";
  },
  removeMobileNav: function() {
    mobileNav.style.display = "none";
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

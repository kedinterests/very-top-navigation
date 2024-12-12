export default {
  name: "custom-menu",
  
  initialize() {
	document.addEventListener("DOMContentLoaded", () => {
	  const menuButtons = document.querySelectorAll(".menu-button");

	  menuButtons.forEach((button) => {
		button.addEventListener("click", (event) => {
		  const dropdown = button.nextElementSibling;

		  // Close other dropdowns
		  document.querySelectorAll(".dropdown").forEach((d) => {
			if (d !== dropdown) d.style.display = "none";
		  });

		  // Toggle current dropdown
		  dropdown.style.display =
			dropdown.style.display === "block" ? "none" : "block";
		});
	  });

	  // Close dropdown when clicking outside
	  document.addEventListener("click", (e) => {
		if (!e.target.closest(".menu-item")) {
		  document.querySelectorAll(".dropdown").forEach((d) => {
			d.style.display = "none";
		  });
		}
	  });
	});
  },
};

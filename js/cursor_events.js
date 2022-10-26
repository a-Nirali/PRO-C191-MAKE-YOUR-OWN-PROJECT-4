AFRAME.RegisterComponent("cursor-listener", {
    schema: {
        selectedItemId: { default: "", type: "string" }
    },
    init: function () {
        this.handleClickEvents()
    },
    handleClickEvents() {
        this.el.addEventListenter("click", evt => {
            const placesContainer = document.querySelector("#places-container")
            const {state}=placesContainer.getAttribute("heritage")
        })
    }
})
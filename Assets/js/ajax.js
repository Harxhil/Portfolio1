document.addEventListener("DOMContentLoaded", () => {

    document.addEventListener("click", async (e) => {

        const link = e.target.closest(".ajax-link");

        if (!link) return;

        e.preventDefault();

        const url = link.getAttribute("href");

        try {

            const response = await fetch(url);

            const html = await response.text();

            const parser = new DOMParser();

            const doc = parser.parseFromString(
                html,
                "text/html"
            );

            const newContent =
                doc.querySelector("#content");

            document.querySelector("#content")
                .innerHTML =
                newContent.innerHTML;

            history.pushState(
                {},
                "",
                url
            );

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        } catch (error) {

            console.error(error);

        }

    });

});
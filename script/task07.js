function setCookie(name, value, expires) {
    document.cookie = `${name}=${value};expires=${expires};path=/`;
}

function getCookie(name) {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split("=");
        if (cookieName.trim() === name) {
            return cookieValue;
        }
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
}

document.addEventListener("DOMContentLoaded", () => {
    const acceptCookiesLink = document.querySelector("footer a");
    const messageBox = document.querySelector("footer div");

    acceptCookiesLink.addEventListener("click", (event) => {
        event.preventDefault();

        const expires = new Date();
        expires.setDate(expires.getDate() + 1);

        setCookie("acceptsCookies", "true", expires);
        messageBox.style.display = "none";
        showDeleteCookieBox();
});

    const acceptsCookies = getCookie("acceptsCookies");
        if (acceptsCookies === "true") {
            messageBox.style.display = "none";
            showDeleteCookieBox();
}
});

function showDeleteCookieBox() {
    const deleteCookieBox = document.createElement("div");
    deleteCookieBox.innerHTML = `
    <div>
        <p>
            Cookie accepted! <button id="deleteCookieButton">Delete the cookie</button>
        </p>
    </div>
    `;
    document.querySelector("footer").appendChild(deleteCookieBox);

    const deleteCookieButton = document.getElementById("deleteCookieButton");
    deleteCookieButton.addEventListener("click", () => {
    deleteCookie("acceptsCookies");
    const deleteCookieBox = document.querySelector("footer div:last-child");
    deleteCookieBox.remove();
    const messageBox = document.querySelector("footer div");
    messageBox.style.display = "block";
    });
}
// Phát video YouTube

function playYouTube(url, title) {

    const videoArea =
        document.getElementById("videoArea");

    videoArea.innerHTML = `
        <iframe
            src="${url}"
            title="${title}"
            allowfullscreen>
        </iframe>
    `;

    document.getElementById("videoTitle").textContent =
        title;


    // Cuộn tới video trên màn hình nhỏ
    if (window.innerWidth <= 700) {

        videoArea.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


// Phát video bằng thẻ HTML5 video

function playLocalVideo() {

    const videoArea =
        document.getElementById("videoArea");

    videoArea.innerHTML = `
        <video controls>
            <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
            >

            Trình duyệt của bạn không hỗ trợ thẻ video.
        </video>
    `;

    document.getElementById("videoTitle").textContent =
        "Hoạt hình thiếu nhi - HTML5 Video";


    if (window.innerWidth <= 700) {

        videoArea.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


// Tìm kiếm phim

function searchMovie() {

    const keyword =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();

    const movies =
        document.querySelectorAll(".movie-item");


    movies.forEach(function (movie) {

        const movieName =
            movie
                .getAttribute("data-name")
                .toLowerCase();


        if (
            movieName.includes(keyword)
        ) {

            movie.style.display = "flex";

        } else {

            movie.style.display = "none";

        }

    });
}


// Cho phép Enter để tìm kiếm

document
    .getElementById("searchInput")
    .addEventListener(
        "keyup",
        function (event) {

            if (event.key === "Enter") {

                searchMovie();

            }

        }
    );
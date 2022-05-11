const center = document.getElementById("center")
center.style.textAlign = "center"
center.style.fontSize = "25px"
const time = document.getElementById("display");
time.style.fontSize = "50px"
time.style.color = "orange",

    setTimeout(function () {
        time.innerText = "10";
        setTimeout(function () {
            time.innerText = "9";
            setTimeout(function () {

                time.innerText = "8";
                setTimeout(function () {

                    time.innerText = "7";
                    setTimeout(function () {

                        time.innerText = "6";
                        setTimeout(function () {

                            time.innerText = "5";
                            setTimeout(function () {

                                time.innerText = "4";
                                setTimeout(function () {

                                    time.innerText = "3";
                                    setTimeout(function () {

                                        time.innerText = "2";
                                        setTimeout(function () {

                                            time.innerText = "1";
                                            setTimeout(function () {
                                                const img = document.createElement("img")
                                                img.src = "./ccc64042366bddc30d3feabb7d31270f.gif"
                                                center.appendChild(img)
                                                time.innerText = ""
                                            }, 1000);


                                        }, 1000);


                                    }, 1000);


                                }, 1000);

                            }, 1000);

                        }, 1000);

                    }, 1000);

                }, 1000);

            }, 1000);
        }, 1000);
    }, 1000);
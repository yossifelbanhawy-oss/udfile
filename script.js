
const files = [
    {
        name: "s.pdf",
        url: "files/s.pdf"
    }
];

const fileList = document.getElementById("file-list");

files.forEach(file => {
    const fileElement = document.createElement("div");
    fileElement.className = "file";

    const fileName = document.createElement("span");
    fileName.className = "file-name";
    fileName.textContent = file.name;

    const downloadButton = document.createElement("a");
    downloadButton.className = "download";
    downloadButton.textContent = "Download";
    downloadButton.href = file.url;
    downloadButton.setAttribute("download", "");

    fileElement.appendChild(fileName);
    fileElement.appendChild(downloadButton);

    fileList.appendChild(fileElement);
});

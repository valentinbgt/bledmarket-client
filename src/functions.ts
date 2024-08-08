export const formatSize = (bytes: number) => {
    if      (bytes >= 1073741824) { bytes = (bytes / 1073741824); }
    else if (bytes >= 1048576)    { bytes = (bytes / 1048576); }
    else if (bytes >= 1024)       { bytes = (bytes / 1024); }
    else if (bytes > 1)           { bytes = bytes; }
    else if (bytes == 1)          { bytes = bytes; }
    else                          { bytes = 0; }
    return Number(bytes).toPrecision(3);
};

export const formatUnits = (bytes: number) => {
    if      (bytes >= 1073741824) { return "Go"; }
    else if (bytes >= 1048576)    { return "Mo"; }
    else if (bytes >= 1024)       { return "Ko"; }
    else if (bytes > 1)           { return "octets"; }
    else if (bytes == 1)          { return "octet"; }
    else                          { return "octet"; }
};

export const formatSizeUnit = (bytes: number) => {
    return formatSize(bytes) + ' ' + formatUnits(bytes);
};

export const formatDate = (timestamp: number) => {
    let date = new Date(timestamp * 1000);

    let formatted =
      ("0" + date.getDate()).slice(-2) +
      "/" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "/" +
      date.getFullYear() +
      " " +
      date.getHours() +
      "h" +
      date.getMinutes();

    return formatted;
}

export const isFileDisplayable = (mime: string): string | false => {
    var iframe = [
        "text/plain",
        "text/html",
        "text/css",
        "text/javascript",
        "application/javascript",
        "application/x-javascript",
        "application/pdf",
        "application/json",
        "application/xml",
        "application/xhtml+xml"
    ];

    var image = [
        "image/gif",
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/webp",
        "image/avif"
    ]

    var audio = [
        "audio/mpeg",
        "audio/ogg",
        "audio/wav",
        "audio/webm"
    ];

    var video = [
        "video/mp4",
        "video/webm",
        "video/ogg"
    ] ;


    if(iframe.includes(mime)) return "IFRAME";
    if(image.includes(mime)) return "IMAGE";
    if(audio.includes(mime)) return "AUDIO";
    if(video.includes(mime)) return "VIDEO";
    return false;
}
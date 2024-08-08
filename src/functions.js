export const formatSize = (bytes) => {
    if      (bytes >= 1073741824) { bytes = (bytes / 1073741824); }
    else if (bytes >= 1048576)    { bytes = (bytes / 1048576); }
    else if (bytes >= 1024)       { bytes = (bytes / 1024); }
    else if (bytes > 1)           { bytes = bytes; }
    else if (bytes == 1)          { bytes = bytes; }
    else                          { bytes = 0; }
    return Math.round((Number.parseFloat(bytes).toPrecision(3))*100)/100;
};

export const formatUnits = (bytes) => {
    if      (bytes >= 1073741824) { bytes = "Go"; }
    else if (bytes >= 1048576)    { bytes = "Mo"; }
    else if (bytes >= 1024)       { bytes = "Ko"; }
    else if (bytes > 1)           { bytes = "octets"; }
    else if (bytes == 1)          { bytes = "octet"; }
    else                          { bytes = "octet"; }
    return bytes;
};

export const formatSizeUnit = (bytes) => {
    return formatSize(bytes) + ' ' + formatUnits(bytes);
};
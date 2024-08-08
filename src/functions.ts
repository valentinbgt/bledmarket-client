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
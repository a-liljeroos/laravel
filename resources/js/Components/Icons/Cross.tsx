import React from "react";

interface ICross {
    size?: number;
}

const Cross = ({ size }: ICross) => {
    const style: React.CSSProperties = {
        height: "min-content",
        width: "min-content",
        cursor: "pointer",
        display: "grid",
        placeItems: "center",
    };

    return (
        <div className="cross-cont" role="button" style={style}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={size || 25}
                height={size || 25}
                viewBox="0 0 158 158"
            >
                <image
                    x="4"
                    y="4"
                    width="150"
                    height="150"
                    xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAFo0lEQVR4nO2dvW4lRRCFywaEViBBgEgg2QiJB+FNeBRIeQASYkIkEjKizcgQEhHJJkhIELABAowuuyPa5s7sTE9Xdf18n+TA9p32zDlnftzTXS0G3L34Ah9cvPgkuhd3D75gLq0fn2nuyY1i23+KyCvGfxPWuXZi32rdTW6VjLhbCZVwW5zCmuZ/i8gXkQ5izxf48eNL717sDRUP9DYc8eIrrwfxa0ewCJcePV48GrU3o56xLjv11oltYSy9mj4TkW+9eNFzZnDl0mOEF08yHAThGsdIL76bdRA/KASLcPWj4cW7vXvT21mpHQA6UY+h6cePIvLB0Y16DLS6qhCufVj48ZOIPD6ywVHzrG9VhGsbSz+eisj7ez98pLvh6779OQXPXOtYa/OeiHy498N7rwizDebKdZ+ZfvwiIu+87EN7DPNy1SBcz/Hgx28i8vbWB15mlrdbUfVwefLjdxF5c+2XW89Yn+rszykqP3N5O/Y3ROSjtV+uXQG8G1jtyuXZjz9E5PWHP7xmUJSrQpVwRfDjMlr4tfYHD82JdqvJHq5IfvwlIq8u37TPWE/n7M8pMj9zRTu2y1D0j5dvljM+ukHZrlyR/bjs++1NorM+S7hS+KE1S2cGGQxJc2vPcitsiXrlSuVBawLhmkc67aN3N2wRJVwpNY/cQboH7+FKq3XUVzpH8Bqu1BpviU649EivbbRhM2fwEq4SmkYa6DeC2eEqo2WUockjmRWuUhoeEZlw9VNOO+/TvzSxCldJzTxPWLVAO1xltfI6xd4SrXCV1uiMqIRrnfLanBW0vIBXKK/JqQ0bEPI/0GLExg0IigZjG2ioLCyh0mikoaLAhEqzoYZKQhMqi8YaKghOqCwbbMgsPKGa0WhDRgMI1cyGGyj36BNV73nDXxN13y3HJREuH5h4zoC3Wpj5PWOYLuGag6nXjP+ugbnPM2etEC4bpnjMdKjcTPPXwyROwqXDVG+ZHZyT6b56qmlAuMbgwlOKZeTCjZ8eS/wQrj5ceUntqBy489FzxTvCtQ+XHlJKMTZu/YtQAJZwXce1d1QWjol73yLVQydczwnhGYX2YxHGr4jLg1QNVyivWHcmBuF8irwUW5VwhfQo+hp/2cMV1p8Mi0dmDVdob1iV1Cfhfcm0wio4gluhX7gVToSHd6fQ3eAfuhsMoYPUObzSiQOvdBThJXQQGDYTD4bNDIRQ3YeBfgMgVNdhaPIJCNU2TKbogFDtg+lfByBUx2DC6g4IVR9Msd+AUJ2DoiBXIFRjoIxRA6EaC4XXCJUapUtFEipdSha3JVQ2lCrHTahsKbGAAKGaQ+olTwjVXFIu0kSofJBqWTlC5YsUC2ESKp+EXrqXxcZ9E3Kx8cwGEK4ZjRYRnnBZNlhMcMJl0VhRoQmXZkPFBSZcGo0g7L+gwcgGEPQeaDFiY4S8SnlNTm2IgJuU14bnCfry9nBYox5RCdV+ymrFv9X6lNTsiLiEqp9y2tG7bEcpDfeITKjGUUZLXrLaU0LTLbEJlR7ptWWs0TxSa3xNdEJlR1qtGXI7n5Sat+ITqnmk056ZJ35I5cENoXJFGi8yrbCaYVHPLEspp7kVpjHkBeH9WK5YkY3JFioJfEyfP3x4X4h2pmQMVUtYPyJ3kGYP1UJIP6K+0qkSqoVwfqz9V+jZuGqhEsfH/M3Rl9AL3s6UiqFqCeNHpIF+1UO1EMKPKEOTCdV93Puxt+d9prGE6v/M0uT70ZMpFqzPFEK1jVs/PE9YJVT7cOmH1yn2hOoY7vzoHd2gaTyhOo6WZj9bFwVZGH2mEKpzuPHDU+E1QjUGF354KTZGqMYy3Y9RI0jP7AihGk+vps+8FbddOHqmECpdpvkxcwEBQmXDFD9mlUkkVLaY+6E1S2drRwmVPVsDOlX8sK7BSajmksqPOxbDdIW+HyLyD0TUu2gzXrTBAAAAAElFTkSuQmCC"
                />
            </svg>
        </div>
    );
};

export default Cross;

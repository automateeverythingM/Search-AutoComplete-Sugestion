export default function sortThen(arr, props, sensitive = false) {
    return arr.sort((a, b) => {
        return props
            .map((prop) => {
                let dir = 1;

                if (prop[0] === "-") {
                    // they want a reverse sort
                    dir = -1;
                    prop = prop.substring(1);
                }

                // sort should be case insensitive
                const _a =
                    typeof a[prop] === "string" && sensitive === false
                        ? a[prop].toLowerCase()
                        : a[prop];
                const _b =
                    typeof b[prop] === "string" && sensitive === false
                        ? b[prop].toLowerCase()
                        : b[prop];

                return _a > _b ? dir : _a < _b ? -dir : 0;
            })
            .reduce((p, n) => {
                return p ? p : n;
            }, 0);
    });
}

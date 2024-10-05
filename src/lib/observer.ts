const callback = (entries: IntersectionObserverEntry[], observer: any) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
        const animation = entry.target.getAttribute("data-anim");

        if (!animation) return;

        const classes = animation.split(" ");

        if (entry.isIntersecting) {

            classes.forEach(cl => {
                entry.target.classList.add(cl);
            })

        } else {
            classes.forEach(cl => {
                entry.target.classList.remove(cl);
            })
        }
    });
};

type initProps = {
    options: {
        rootMargin: string,
        threshold: number
    },
    items: NodeListOf<Element>
}

const initObserver = ({options, items}: initProps) => {

    const observer = new IntersectionObserver(callback, options);

    if (items.length <= 0) return;

    items.forEach(el => {
        observer.observe(el)
    })

    return observer;
}
export function Observe(items: NodeListOf<Element>) {

    const options = {
        rootMargin: "50%",
        threshold: 1.0,
    };


    let observer = initObserver({ options, items });

    const cusEvent = new CustomEvent("onnavigate", {
        detail: {
            observer
        }
    })


    return cusEvent;
}
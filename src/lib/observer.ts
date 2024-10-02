export function Observe(targetClass: string) {

    const callback = (entries: IntersectionObserverEntry[], observer: any) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
            const animation = entry.target.getAttribute("data-anim");

            if(!animation) return;

            const classes = animation.split(" ");

            if(entry.isIntersecting) {

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

    const options = {
        rootMargin: "80px",
        threshold: 1.0,
    };

    const observer = new IntersectionObserver(callback, options);

    const elements = document.querySelectorAll(targetClass);

    if (elements.length <= 0) return;

    elements.forEach(el => {
        observer.observe(el)
    })
}
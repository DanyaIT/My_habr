import { current } from "@reduxjs/toolkit";
import { MutableRefObject, useEffect } from "react";

interface useInfliniteScroll {
    callback?: () => void,
    triggerRef: MutableRefObject<HTMLElement>
    wrapperRef: MutableRefObject<HTMLElement>

}

export function useInfliniteScroll({ callback, triggerRef, wrapperRef }: useInfliniteScroll) {

    useEffect(() => {
        let observer:IntersectionObserver;
        if (callback) {
            const options = {
                root: wrapperRef.current,
                rootMargin: "10px",
                threshold: 1.0,
            };

            const observer = new IntersectionObserver(([entry]: IntersectionObserverEntry[]) => {
                if (entry.isIntersecting) {
                    callback()
                }
            }, options);

            observer.observe(triggerRef.current)

        }

        return () => {
            if (observer && triggerRef.current) {
              
                observer.unobserve(triggerRef.current)
            }
        }
        
    }, [callback, triggerRef, wrapperRef])
}
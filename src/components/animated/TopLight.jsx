import React, { useEffect, useRef, useState } from 'react';

// Top Light...
export function TopLight({ scroll }) {
    const { scrollPosition, scrollPositionValue } = scroll;

    const planeImgRef = useRef(null);
    const [isPlaneHidden, setIsPlaneHidden] = useState(false);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    useEffect(() => {
        if (windowWidth >= 768) {
            planeImgRef.current.style.width = "1600px"; // Desktop initial width
        } else {
            planeImgRef.current.style.width = "600px"; // Mobile initial width
        }
        if (scrollPositionValue.current <= 300) {
            planeImgRef.current.style.width = windowWidth >= 768 ? "1600px" : "600px";
        }
    }, [scrollPositionValue, windowWidth])


    useEffect(() => {
        console.log("scrollPosition: ", scrollPosition, scrollPositionValue);
        console.log("planeImgRef.current.style.width", parseFloat(planeImgRef.current.style.width));

        const handleResize = () => {
            if (planeImgRef.current) {
                if (scrollPosition.top && parseFloat(planeImgRef.current.style.width) >= 1600) {
                    planeImgRef.current.style.width = `${parseInt(planeImgRef.current.style.width) - 10}px`;
                }
                if (scrollPosition.bottom) {
                    planeImgRef.current.style.width = `${parseInt(planeImgRef.current.style.width) + 10}px`;
                }
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [scrollPosition, scrollPositionValue]);

    
    useEffect(() => {
        if (scrollPosition.bottom && scrollPositionValue.current > 600) {
            setIsPlaneHidden(true);
        } else {
            setIsPlaneHidden(false);
        }
    }, [scrollPosition.bottom, scrollPositionValue]);

    return (
        <>
            <div className={`topLight sticky top-0 ${isPlaneHidden ? "hidden" : "block"} md:block`}>
                <img ref={planeImgRef} className='' src='/images/plano01.png' alt='plano01.png' />
            </div>
        </>
    );
}

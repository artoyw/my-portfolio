"use client";
import olivia1 from "../../assets/images/olivia1.jpg";
import olivia2 from "../../assets/images/olivia2.jpeg";
import olivia3 from "../../assets/images/olivia3.jpeg";
import olivia4 from "../../assets/images/olivia4.jpeg";
import olivia5 from "../../assets/images/olivia5.jpeg";

import { Ref, forwardRef, useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import { motion, useMotionValue } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/src/components/button";

export const PhotoGallery = ({
    animationDelay = 0.5,
}: {
    animationDelay?: number;
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // First make the container visible with a fade-in
        const visibilityTimer = setTimeout(() => {
            setIsVisible(true);
        }, animationDelay * 1000);

        // Then start the photo animations after a short delay
        const animationTimer = setTimeout(
            () => {
                setIsLoaded(true);
            },
            (animationDelay + 0.4) * 1000
        ); // Add 0.4s for the opacity transition

        return () => {
            clearTimeout(visibilityTimer);
            clearTimeout(animationTimer);
        };
    }, [animationDelay]);

    // Animation variants for the container
    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1, // Reduced from 0.3 to 0.1 since we already have the fade-in delay
            },
        },
    };

    // Animation variants for each photo
    const photoVariants = {
        hidden: () => ({
            x: 0,
            y: 0,
            rotate: 0,
            scale: 1,
            // Keep the same z-index throughout animation
        }),
        visible: (custom: { x: any; y: any; order: number }) => ({
            x: custom.x,
            y: custom.y,
            rotate: 0, // No rotation
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 70,
                damping: 12,
                mass: 1,
                delay: custom.order * 0.15, // Explicit delay based on order
            },
        }),
    };

    const [photoSize, setPhotoSize] = useState(300); // default size

    useEffect(() => {
        const updateSize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setPhotoSize(120); // small screens
            } else if (width < 1024) {
                setPhotoSize(300); // medium
            } else {
                setPhotoSize(450); // large
            }
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    const spacing = photoSize * 0.8; // adjust for desired overlap/gap

    const photos = [
        {
            id: 1,
            order: 0,
            x: `${-2 * photoSize}px`,
            y: `${photoSize * 0.05}px`,
            zIndex: 50,
            direction: "left" as Direction,
            src: olivia3.src,
        },
        {
            id: 2,
            order: 1,
            x: `${-1.2 * photoSize}px`,
            y: `${photoSize * 0.15}px`,
            zIndex: 40,
            direction: "right" as Direction,
            src: olivia2.src,
        },
        {
            id: 3,
            order: 2,
            x: `${-0.2 * photoSize}px`,
            y: `${photoSize * 0.03}px`,
            zIndex: 30,
            direction: "left" as Direction,
            src: olivia1.src,
        },
        {
            id: 4,
            order: 3,
            x: `${.75 * photoSize}px`,
            y: `${photoSize * 0.05}px`,
            zIndex: 20,
            direction: "right" as Direction,
            src: olivia5.src,
        },
        {
            id: 5,
            order: 4,
            x: `${1.5 * photoSize}px`,
            y: `${photoSize * 0.18}px`,
            zIndex: 10,
            direction: "left" as Direction,
            src: olivia4.src,
        },
    ];


    return (
        <div className="mt-40 relative min-h-[400px] lg:min-h-[500px] xl:min-h-[600px]">

            <div className="absolute inset-x-0 top-40 max-md:hidden -z-10 h-[300px] w-full ..."></div>

            <div className="relative mb-8 h-[350px] w-full items-center justify-center lg:flex">
                <motion.div
                    className="relative mx-auto flex w-full max-w-7xl justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <motion.div
                        className="relative flex w-full justify-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                    >
                        <div className="relative h-[220px] w-[220px]">
                            {/* Render photos in reverse order so that higher z-index photos are rendered later in the DOM */}
                            {[...photos].reverse().map((photo) => (
                                <motion.div
                                    key={photo.id}
                                    className="absolute left-0 top-0"
                                    style={{ zIndex: photo.zIndex }} // Apply z-index directly in style
                                    variants={photoVariants}
                                    custom={{
                                        x: photo.x,
                                        y: photo.y,
                                        order: photo.order,
                                    }}
                                >
                                    <Photo
                                        width={photoSize}
                                        height={photoSize}
                                        src={photo.src}
                                        alt="Family photo"
                                        direction={photo.direction}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

function getRandomNumberInRange(min: number, max: number): number {
    if (min >= max) {
        throw new Error("Min value should be less than max value");
    }
    return Math.random() * (max - min) + min;
}

const MotionImage = motion(
    forwardRef(function MotionImage(
        props: ImageProps,
        ref: Ref<HTMLImageElement>
    ) {
        return <Image ref={ref} {...props} />;
    })
);

type Direction = "left" | "right";

export const Photo = ({
    src,
    alt,
    className,
    direction,
    width,
    height,
    ...props
}: {
    src: string;
    alt: string;
    className?: string;
    direction?: Direction;
    width: number;
    height: number;
}) => {
    const [rotation, setRotation] = useState<number>(0);
    const x = useMotionValue(200);
    const y = useMotionValue(200);

    useEffect(() => {
        const randomRotation =
            getRandomNumberInRange(1, 4) * (direction === "left" ? -1 : 1);
        setRotation(randomRotation);
    }, []);

    function handleMouse(event: {
        currentTarget: { getBoundingClientRect: () => any };
        clientX: number;
        clientY: number;
    }) {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    }

    const resetMouse = () => {
        x.set(200);
        y.set(200);
    };

    return (
        <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            whileTap={{ scale: 1.2, zIndex: 9999 }}
            whileHover={{
                scale: 1.03,
                zIndex: 9999,
            }}
            whileDrag={{
                scale: 1.1,
                zIndex: 9999,
            }}
            initial={{ rotate: 0 }}
            animate={{ rotate: rotation }}
            style={{
                width,
                height,
                perspective: 400,
                transform: `rotate(0deg) rotateX(0deg) rotateY(0deg)`,
                zIndex: 1,
                WebkitTouchCallout: "none",
                WebkitUserSelect: "none",
                userSelect: "none",
                touchAction: "none",
            }}
            className={cn(
                className,
                "relative mx-auto shrink-0 cursor-grab active:cursor-grabbing"
            )}
            onMouseMove={handleMouse}
            onMouseLeave={resetMouse}
            draggable={false}
            tabIndex={0}
        >
            <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-sm">
                <MotionImage
                    className={cn("rounded-3xl  object-cover")}
                    fill
                    src={src}
                    alt={alt}
                    {...props}
                    draggable={false}
                />
            </div>
        </motion.div>
    );
};

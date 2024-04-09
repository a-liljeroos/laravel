import React, { useState, useRef } from "react";
import Cross from "@/Components/Icons/Cross";
import "./DragFrame.scss";

interface IDragFrame {
    initialX?: number;
    initialY?: number;
    close: React.Dispatch<React.SetStateAction<boolean>>;
    children?: React.ReactNode;
}

export const DragFrame = ({
    initialX = 50,
    initialY = 200,
    close,
    children,
}: IDragFrame) => {
    const handleRef = React.useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState<{ x: number; y: number }>({
        x: initialX,
        y: initialY,
    });
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({
        x: 0,
        y: 0,
    });

    const handleMouseDown = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (event.target === handleRef.current) {
            setIsDragging(true);
            setDragOffset({
                x: event.clientX - position.x,
                y: event.clientY - position.y,
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    function throttle<T extends (...args: any[]) => void>(
        callback: T,
        delay: number
    ): T {
        let lastCall = 0;

        return function (
            this: any,
            ...args: Parameters<T>
        ): ReturnType<T> | undefined {
            const now = new Date().getTime();
            if (now - lastCall < delay) {
                return;
            }
            lastCall = now;
            return callback.apply(this, args) as ReturnType<T> | undefined;
        } as T;
    }

    const handleMouseMove = throttle(
        (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            if (isDragging) {
                setPosition({
                    x: event.clientX - dragOffset.x,
                    y: event.clientY - dragOffset.y,
                });
            }
        },
        200
    );

    return (
        <div className="drag-bg">
            <div
                className="draggable-element"
                style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                }}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                <div ref={handleRef} className="draggable-element-header">
                    <div
                        onClick={() => {
                            close(false);
                        }}
                    >
                        <Cross size={30} />
                    </div>
                </div>
                <div className="draggable-element-content">{children}</div>
            </div>
        </div>
    );
};

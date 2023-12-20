//Todo: Students can see a list of all the degrees plans that they have made
import React, { useState } from "react";
import { DegreePlan } from "./interfaces/degreeplan";
import { DpCard } from "./DpCard";
import { DpView } from "./DpView";
import { Course } from "./interfaces/course";

export function DpList({
    dp,
    deleteDp,
    editDp,
    allCourses
}: {
    dp: DegreePlan[];
    deleteDp: (id: number) => void;
    editDp: (id: number, newDp: DegreePlan) => void;
    allCourses: Course[];
}): JSX.Element {
    const [displayId, setDisplayId] = useState<null | number>(null);
    const handleDpView = (id: number) => {
        setDisplayId(id);
    };
    const resetDisplayId = () => {
        setDisplayId(null);
    };
    return (
        <div>
            {!displayId && <DpCard dp={dp} handleClick={handleDpView}></DpCard>}
            {dp.map((dp: DegreePlan) => {
                if (displayId === dp.id) {
                    return (
                        <DpView
                            dp={dp}
                            resetView={resetDisplayId}
                            deleteDp={deleteDp}
                            editDp={editDp}
                            allCourses={allCourses}
                        ></DpView>
                    );
                } else {
                    return null;
                }
            })}
        </div>
    );
}
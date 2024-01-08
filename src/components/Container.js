import React, { useState, useEffect, useRef } from 'react'
import classes from './Container.module.css'


export default function Container(props) {

    // const contentRefs = useRef(props.excelData.map(() => React.createRef()));
    let xCellIndex = 0;
    const contentRefs = useRef(null);
    if (props.excelData) {
        const sum_list = [].concat(...props.excelData.slice(1))
        // props.excelData.slice(1).forEach((row) => contentRefs.current = row.map(() => React.createRef()))
        contentRefs.current = sum_list.map(() => React.createRef())

    }
    useEffect(() => {
        if (props.excelData) {
            const scrollContainer = contentRefs.current.map(ref => ref.current);
            // const scrollContainer = contentRefs.current;

            const scroll = () => {
                scrollContainer.forEach(scrollContainer => {
                    if (props.excelData) {
                        scrollContainer.scrollTop += 1;
                    }

                    if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {

                        scrollContainer.scrollTop = 0;
                    }
                });
            };

            const intervalId = setInterval(scroll, 50);

            return () => clearInterval(intervalId);
        }
    }, [props.excelData]);


    return (
        <div className={classes.container} >
            {props.excelData && (
                <table border="1">
                    <thead>
                        <tr>
                            {props.excelData[0].map((cell, index) => (
                                <th className={classes.table_header} key={index}>
                                    {

                                        cell.split('\r\n').map((e, i) => (
                                            <p key={i}>
                                                {e}
                                                <br />
                                            </p>
                                        ))

                                    }
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody >
                        {props.excelData.slice(1).map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, cellIndex) =>
                                (
                                    <td className={classes.table_content} key={cellIndex}>
                                        <div className={classes.table_content_box}
                                            ref={contentRefs.current[xCellIndex++]}
                                        // ref={contentRefs}
                                        >
                                            <p>{cell}</p>
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

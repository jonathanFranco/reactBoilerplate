import React, { Fragment } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { Props } from "./types";

const Buttton = ({ props }: Props) => {
    return (
        <Fragment>
            <button style={{ outline: "none" }}>
                {props?.type === "link" && (
                    <a target={`_blank`}
                        href={`https://www.youtube.com/results?search_query=${props?.link} Trailer`}
                        className={`border-2 border-pirataflix-clean_red bg-pirataflix-clean_red rounded-lg px-4 py-2 shadow-md cursor-pointer transform transition duration-200 hover:shadow-2xl hover:scale-95 flex items-center font-bold`}>
                        <BsFillPlayFill size={`1.3rem`} className={`pr-1`} />{props?.title}</a>
                )}
                {props?.type === "default" && (
                    <p onClick={props?.onClick} className={`border-2 border-white rounded-lg px-4 py-2 shadow-md cursor-pointer transform transition duration-200 hover:shadow-2xl hover:scale-95 flex items-center font-bold`}>
                        <AiFillHeart size={`1.3rem`} className={`pr-1`} />{props?.title}</p>
                )}
            </button>
        </Fragment>
    )
}
export default Buttton;
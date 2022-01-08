// import "./style.css";
import React, { Fragment } from "react";
import Loader from "react-loader-spinner";

type Props = {
  fixed?: boolean;
  overlay?: boolean;
  children: JSX.Element | Array<JSX.Element>;
  isActive: boolean;
  hide?: string;
  heightOverlay?: string;
};

const Loading = ({
  fixed,
  overlay,
  children,
  isActive,
  hide,
  heightOverlay,
}: Props): JSX.Element => {
  if (overlay || fixed) {
    return (
      <Fragment>
        {isActive && (
          <div className={`${hide} h-screen items-center z-50`}>
            <div
              className={`flex ${heightOverlay} justify-center items-center`}
            >
              <Loader
                type="ThreeDots"
                color="#FFF"
                height={50}
                width={50}
              />
            </div>
          </div>
        )}
        {children}
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        {isActive && (
          <div className={`${hide} h-screen items-center grid grid-flow-row justify-items-center z-50`}>
            <div
              className={`flex ${heightOverlay} justify-center items-center`}
            >
              <Loader
                type="ThreeDots"
                color="#FFF"
                height={50}
                width={50}
              />
            </div>
          </div>
        )}
        {!isActive && children}
      </Fragment>
    );
  }
};

export default Loading;

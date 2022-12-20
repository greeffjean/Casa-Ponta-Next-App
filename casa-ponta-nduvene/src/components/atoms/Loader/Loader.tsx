import { useState, CSSProperties, FC } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export const Loader: FC = () => {

    return (
        <div className="sweet-loading">
            <ClipLoader
                color={'rgb(237, 227, 169)'}
                loading={true}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

import React from "react";

const texts = {
    title: "404",
    subTitle: "Page not found.",
    backToHomepage: "Back to homepage",
}

const Page404Module = () => {
    return (
        <div>
            <p>{texts.title}</p>
            <p>{texts.subTitle}</p>
        </div>
    );
};

export default Page404Module;
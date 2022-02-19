import { useMediaQuery } from "@mui/material";

import React from 'react'

export function useScreenQuery(defaultView, xlView) {
    const screenSizeBoolean = useMediaQuery('(max-width:1400px)');
    return (
        screenSizeBoolean? defaultView : xlView
    )
}


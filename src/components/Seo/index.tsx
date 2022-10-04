import React from 'react'
import {Helmet} from 'react-helmet'

export const Seo: React.FC<{title: string}> = ({title}) => (
    <Helmet defaultTitle='LundLabs' title={title}>
        <meta name="description" content="Web and mobile developer in the Grand Rapids area."/>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta></meta>
    </Helmet>
)

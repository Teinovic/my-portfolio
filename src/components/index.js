import React from 'react'
import { Row, Column, Link, Title, SubTitle, Break, Container, Text } from './styles/header'

export default function Header({ children, ...restProps }) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Header.Row = function HeaderRow({ children, ...restProps }) {
    return <Row {...restProps}>{children}</Row>
}

Header.Column = function HeaderColumn({ children, ...restProps }) {
    return <Column {...restProps}>{children}</Column>
}

Header.Link = function HeaderLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

Header.Title = function HeaderTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Header.SubTitle = function HeaderSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Header.Break = function HeaderBreak({...restProps }) {
    return <Break {...restProps} />
}

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}
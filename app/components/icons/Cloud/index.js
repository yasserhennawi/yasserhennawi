import React from 'react';
import PropTypes from 'prop-types';
import styled from 'utils/styled-components'
import Vector from './vector.html'

export default () => (
    <div dangerouslySetInnerHTML={{__html: Vector}} />
)

import * as React from 'react';
import { NavigationContainerProps, NavigationContainerRef } from '@react-navigation/core';
import { Theme, LinkingOptions } from './types';
/**
 * Container component which holds the navigation state designed for React Native apps.
 * This should be rendered at the root wrapping the whole app.
 *
 * @param props.initialState Initial state object for the navigation tree. When deep link handling is enabled, this will be ignored if there's an incoming link.
 * @param props.onStateChange Callback which is called with the latest navigation state when it changes.
 * @param props.theme Theme object for the navigators.
 * @param props.linking Options for deep linking. Deep link handling is enabled when this prop is provided, unless `linking.enabled` is `false`.
 * @param props.fallback Fallback component to render until we have finished getting initial state when linking is enabled. Defaults to `null`.
 * @param props.children Child elements to render the content.
 * @param props.ref Ref object which refers to the navigation object containing helper methods.
 */
declare const NavigationContainer: React.ForwardRefExoticComponent<NavigationContainerProps & {
    theme?: Theme | undefined;
    linking?: LinkingOptions | undefined;
    fallback?: React.ReactNode;
} & React.RefAttributes<NavigationContainerRef>>;
export default NavigationContainer;

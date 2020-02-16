import React, { useEffect, useContext } from 'react'
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react/lib-commonjs/CommandBar'
import { CommandBarButton, IButtonProps } from 'office-ui-fabric-react/lib-commonjs/Button'
import { DirectionalHint } from 'office-ui-fabric-react/lib-commonjs/Callout'
import {
  IContextualMenuItemProps,
  ContextualMenuItem,
  IContextualMenuItemStyles,
  IContextualMenuStyles
} from 'office-ui-fabric-react/lib-commonjs/ContextualMenu'

import { dark } from "../theme/dark"
import { light } from "../theme/light"
import { getTheme } from 'office-ui-fabric-react/lib-commonjs/Styling'
import {Context} from './ThemeProvider'
export const Navbar: React.FunctionComponent = () => {
  const [state, dispatch] = useContext(Context);
  let currentTheme = dark
  let theme = getTheme()
  // use effects
  useEffect(() => {
    dispatch({type: 'SET_DARK'})
  }, [])
  useEffect(() => {
    theme = getTheme()
  })
  let _farItems: ICommandBarItemProps[] = [
    {
      key: 'tile',
      text: 'Toggle Theme',
      // This needs an ariaLabel since it's icon-only
      ariaLabel: 'Toggle Theme',
      iconOnly: true, 
      iconProps: { iconName: currentTheme === dark ? 'Sunny' : 'ClearNight' },
      onClick: () => { 
        currentTheme = currentTheme === light ? dark : light;
        // simple approach to switching icons
        _farItems[0].iconProps = { iconName: currentTheme === dark ? 'Sunny' : 'ClearNight' }
        dispatch({type: 'SET_THEME', payload: currentTheme})
      }
    }
  ]
    
  // Styles for both command bar and overflow/menu items
  const itemStyles: Partial<IContextualMenuItemStyles> = {
    label: { fontSize: 18 },
    icon: { color: theme.palette.themePrimary },
    iconHovered: { color: theme.palette.neutralPrimaryAlt }
  }
  // For passing the styles through to the context menus
  const menuStyles: Partial<IContextualMenuStyles> = {
    subComponentStyles: { menuItem: itemStyles, callout: {} }
  }

  // Custom renderer for main command bar items
  const CustomButton: React.FunctionComponent<IButtonProps> = props => {
    return (
      <CommandBarButton
        {...props}
        onClick={props.onClick}
        styles={{
          ...props.styles,
          ...itemStyles
        }}
      />
    )
  }

  // Custom renderer for menu items (these must have a separate custom renderer because it's unlikely
  // that the same component could be rendered properly as both a command bar item and menu item).
  // It's also okay to custom render only the command bar items without changing the menu items.
  const CustomMenuItem: React.FunctionComponent<IContextualMenuItemProps> = props => {
    // Due to ContextualMenu implementation quirks, passing styles here doesn't work
    return <ContextualMenuItem {...props} />
  }

  const overflowProps: IButtonProps = {
    ariaLabel: 'More commands',
    menuProps: {
      contextualMenuItemAs: CustomMenuItem,
      // Styles are passed through to menu items here
      styles: menuStyles,
      items: [], // CommandBar will determine items rendered in overflow
      isBeakVisible: true,
      beakWidth: 20,
      gapSpace: 10,
      directionalHint: DirectionalHint.topCenter
    }
  }

  const _items: ICommandBarItemProps[] = [
    {
      key: 'newItem',
      text: 'New',
      iconProps: { iconName: 'Add' },
      onClick: () => console.log('Share'),
      subMenuProps: {
        // Must specify the menu item type for submenus too!
        contextualMenuItemAs: CustomMenuItem,
        // Styles are passed through to menu items here
        styles: menuStyles,
        items: [
          { key: 'emailMessage', text: 'Email message', iconProps: { iconName: 'Mail' }, onClick: () => console.log('Share') },
          { key: 'calendarEvent', text: 'Calendar event', iconProps: { iconName: 'Calendar' }, onClick: () => console.log('Share') }
        ]
      }
    },
    { key: 'upload', text: 'Upload', iconProps: { iconName: 'Upload' }, href: 'https://dev.office.com/fabric' },
    { key: 'share', text: 'Share', iconProps: { iconName: 'Share' }, onClick: () => console.log('Share') },
    { key: 'download', text: 'Download', iconProps: { iconName: 'Download' }, onClick: () => console.log('Download') }
  ]

  const _overflowItems: ICommandBarItemProps[] = [
    { key: 'move', text: 'Move to...', onClick: () => console.log('Move to'), iconProps: { iconName: 'MoveToFolder' } },
    { key: 'copy', text: 'Copy to...', onClick: () => console.log('Copy to'), iconProps: { iconName: 'Copy' } },
    { key: 'rename', text: 'Rename...', onClick: () => console.log('Rename'), iconProps: { iconName: 'Edit' } }
  ]

  return (
    <CommandBar
      overflowButtonProps={overflowProps}
      // Custom render all buttons
      buttonAs={CustomButton}
      items={_items}
      overflowItems={_overflowItems}
      farItems={_farItems}
      ariaLabel="Use left and right arrow keys to navigate between commands"
    />
  )
}
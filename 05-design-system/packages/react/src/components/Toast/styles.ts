import * as Toast from '@radix-ui/react-toast';
import { styled } from '../../styles'



export const ToastContainer = styled(Toast.Provider, {
   
})

export const ToastRoot = styled(Toast.Root, {
    backgroundColor: '$gray800',
    borderRadius: '$sm',
    border: '1px solid $gray600',
    padding: 15,
    maxWidth: '20rem',
    position: 'relative',  
    

})


export const ToastTitle = styled(Toast.Title, {
    fontSize: '$xl',
    color: '$white',
    fontFamily: '$default',
    fontWeight: '$bold',
    lineHeight: '$base',
})

export const ToastDescription = styled(Toast.Description, {
    fontSize: '$sm',
    color: '$gray200',
    fontFamily: '$default',
  
    lineHeight: '$base',
})

export const ToastClose = styled(Toast.Close, {
    all: 'unset',
    position: 'absolute',
    top: '$4',
    right: '$4',
    cursor: 'pointer',
    svg: {
      width: '$5',
      height: '$5',
      color: '$white',
    },
    '&:hover': {
      svg: {
        color: '$gray200',
        transition: 'color 0.5s ease-out',
      },
    },
})



export const ToastViewport = styled(Toast.Viewport, {
 

    //  position: 'fixed',
    //  bottom: 0,
    //  right: 0,
    //  display: 'flex',
    //  flexDirection: 'column',
   

    // padding: 25,
    // gap: 10,
    // width: 390,
    // maxWidth: '100vw',
    // margin: 0,
    // listStyle: 'none',
    // zIndex: 2147483647,
    // outline: 'none',
})
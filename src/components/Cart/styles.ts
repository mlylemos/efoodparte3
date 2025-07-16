import styled from 'styled-components'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0; 
  z-index: 1000;
  overflow: hidden;

  .cancelar {
    background: none;
    border: none;
    cursor: pointer;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: right;
    justify-content: center;

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
    display: block;
  }
}


  .fechar {
    background: none;
    border: none;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer

    img {
      width: 16px;
      height: 16px;
    }
  }
`

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  inset: 0;
  z-index: 1000;
`

export const Sidebar = styled.aside`
  background-color: #e66767;
  color: #FFEBD9;
  font-family: 'Roboto', sans-serif;
  width: 360px;
  height: 1624px;
  padding: 8px;
  padding-top: 32px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1001;
  overflow-y: auto;


ul {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    background-color: #FFEBD9;
    color: #e66767;
    padding: 8px;
    width: 344px;
    height: 100px;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
    position: relative; 

    img {
      width: 80px;
      height: 80px;
      object-fit: cover;
    }

  div {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 18px;
    height: 21px;
  }

  span {
    font-size: 14px;
    font-weight: 400;
    height: 22px;
    width: 67px;
  }
}

    button.cancelar {
      position: absolute;
      bottom: 8px;
      right: 1px;
      background: none;
      border: none;
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      img {
        width: 18px;
        height: 18px;
        object-fit: contain;
        display: block;
      }
    }
  }
}

`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  margin: 35px 0 16px 0;
  font-size: 14px;
`

export const ContinueButton = styled.button`
  background-color: #FFEBD9;
  color: #e66767;
  font-size: 14px;
  font-weight: 700;
  height: 24px;
  width: 344px;
  line-height: 100%;
  padding: 12px;
  border: none;
  cursor: pointer;
`
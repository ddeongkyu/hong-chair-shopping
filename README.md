# CHAIR SHOPPING!

본 프로젝트에서는 React와 GSAP을 이용하여 모바일 환경에서의 간단한 의자 쇼핑몰을 구현하였습니다.

State Management를 위하여 redux-toolkit을 사용하였습니다.

Main, Shopping Cart, Product Detail 컴포넌트로 구성되어 있습니다.

컴포넌트 구성에 사용하는 db는 임의로 작성하여 db폴더에 두었습니다.

## Available Scripts

이 프로젝트를 실행하기 위해서는 :

### `npm start`

를 입력 해 주세요 !

## Detail

## `Main`

Main 컴포넌트 에서는 판매중인 상품에 대하여 볼 수 있습니다.

첫 상품 섹션에서 필터를 적용하여 카테고리 별로 상품을 볼 수 있습니다.

All이 기본값으로 설정되어 있으며, Dark, Fabric, Colored로 구분하였습니다.

Best Sellers 구역을 만들어 db에서 Best Seller로 지정한 상품을 필터하여 보여주고 있습니다.

좌측 상단에 Slide Bar Menu를 구현하였으며, 열릴 때와 닫힐 때 GSAP을 이용하여 애니메이션 효과를 적용하였습니다.

우측 상단에 돋보기 모양을 클릭하여 상품 이름으로 상품을 검색할 수 있습니다.

돋보기 오른쪽에 쇼핑백 모양을 클릭하여 장바구니로 이동할 수 있습니다.

## `Product Detail`

Product Details 컴포넌트 에서는 data.json의 id값을 사용하여 상품에 대한 상세 정보를 제공합니다.

여러 개의 상품에 대하여 하나의 컴포넌트에서 정보를 보여주게 처리 하고 있게 구현하여 재사용성을 높혔습니다.

Select Color에서 color를 선택하여 Add To Cart버튼이나 우측 상단의 하트 버튼을 클릭 시 color까지 반영하여 Shopping Cart 컴포넌트에 이동하도록 구현하였습니다.

## `Shopping Cart`

Shopping Cart 컴포넌트 에서는 이전 컴포넌트에서 장바구니로 이동 시킨 상품들의 정보를 보여줍니다.

장바구니에 상품이 없다면 장바구니가 비어있다는 표시를 보여줍니다.

각 상품들에 대하여 “+” 버튼과 “-“ 버튼으로 수량을 조절할 수 있으며, 수량이 0이 되면 장바구니에서 삭제됩니다.

바로 삭제할 수 있도록 “+” 버튼 옆에 “X”버튼도 준비되어 있습니다.

상품의 밑에 상품들의 가격과 배달비가 표시되어 있으며, 최종적으로 결제해야 할 Total Price가 보여집니다.

Checkout 버튼을 클릭하면 백엔드가 있다고 가정하고 2초 후에 Payment 컴포넌트로 이동하도록 setTimeout 함수로 구현하였습니다.

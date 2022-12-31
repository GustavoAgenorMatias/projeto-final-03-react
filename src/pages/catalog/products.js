const products = {
  33: {
    name: "Politriz Orbital SGT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://images.tcdn.com.br/img/img_prod/652205/politriz_red_e_shine_roto_orbital_5_15mm_110v_sgt_sigma_tools_2753_1_e2a94fb5bf095ae6404e8df62ca80f1c.jpg",
      "https://images.tcdn.com.br/img/img_prod/712770/politriz_roto_orbital_red_e_shine_5_15mm_900w_60hz_127v_sigma_tools_3591_1_de5e5b57d426ce7543111cac5901d6ae.jpg",
      "https://images.tcdn.com.br/img/img_prod/652205/politriz_red_e_shine_roto_orbital_6_21mm_220v_sgt_5122_sgt_sigma_tools_2755_5_5e07fd04eeeb9e2b14954b35d3128c07.jpg",
    ],
    price: 1090.00,
    categories: [1, 3],
  },
  1: {
    name: "Politriz DeWalt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://images.tcdn.com.br/img/img_prod/1020876/esmerilhadeira_angular_220v_7_9_1300w_blackedecker_199_3_3955e4738eca3d9e7c9114b1d2350f45.png",
      "https://csferramentas.cdn.plataformaneo.com.br/produto/multifotos/20200314104710_8262991738_DM.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR52_S1MQE1HKevrwRuyqFsMZbXyrPMUHYIDQ&usqp=CAU",
    ],
    price: 1269.85,
    promo_price: 1143.85,
    percent: 15,
    categories: [1, 3],
  },
  4: {
    name: "Produtos GYEON",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://gyeonquartzbr.com/wp-content/uploads/2021/11/productmain_1700x1645px_q2one_set_2021.png",
      "https://m.media-amazon.com/images/I/81BtKoGuLXL.jpg",
      "https://images.squarespace-cdn.com/content/v1/5d0c3d4d24f7520001011b86/3b567e08-95ce-4721-b110-7513ac0f8cd6/1750x1750.png?format=1000w",
    ],
    price: 699.99,
    categories: [1, 4],
  },
  2: {
    name: "Politriz Nano",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://images.tcdn.com.br/img/img_prod/915336/politriz_nano_hibrida_predator_dual_action_rotativa_roto_orbital_kers_1747_1_89bff8127284592ae2a1a3dc4fe1e8bd.png",
      "https://images.tcdn.com.br/img/img_prod/652205/nano_politriz_hibrida_recarregavel_bivolt_80w_12ah_1129_1_20200214205824.jpg",
      "https://static3.tcdn.com.br/img/img_prod/424358/mini_politriz_hibrida_nano_a_bateria_kers_50418145_1_20200813150722.jpg",
    ],
    price: 2600.00,
    promo_price: 2340.00,
    percent: 15,
    categories: [1, 3,],
  },
};

const categories = {
  1: { name: "Polimento" },
  2: { name: "Coat" },
  3: { name: "Máquinas" },
  4: { name: " vitrificador"},
};

module.exports = {
  products,
  categories,
};

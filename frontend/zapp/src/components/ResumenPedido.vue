<template>
  <div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">Cantidad</th>
            <th class="text-center">Estilo</th>
            <th class="text-center">Material</th>
            <th class="text-center">Color</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="de in pedido.detalle" :key="de.estilo.codigo">
            <td class="text-center">{{ de.subtotal }}</td>
            <td class="text-center">{{ de.estilo.codigo }}</td>
            <td class="text-center">{{ de.detalleMaterial.material.nombre }}</td>
            <td class="text-center">{{ de.detalleMaterial.color }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>




<script>
//import { mapMutations } from "vuex";
export default {
  data() {
    return {
      pedido: {
        _id: "02aa5e7c744e62a68b3cd7fd43003298",
        _rev: "1-6273ccf3d72c008abff490731d8f0635",
        cliente: {
          _id: "c92e101d774a93666eac12542e001fd7",
          _rev: "1-e4a61ef93dff0ce51c68e78d8d221ddb",
          nombre: "Juan",
          telefono: "2449-2393",
          direccion: "guatemala",
        },
        fecha: "2021-02-04T17:39:31.209Z",
        semana: 5,
        detalle: [
          {
            estilo: {
              _id: "4bce85615b36787c9bc135d3e50027ff",
              _rev: "18-6409ccb4ccc09eefa342e6dc33a58a2c",
              codigo: "TA2",
              descripcion: "",
              tacon: true,
              _attachments: {
                img: {
                  content_type: "image/jpeg",
                  revpos: 18,
                  digest: "md5-wMa8xfa7TDJFz2tFDsVObw==",
                  length: 9845,
                  stub: true,
                },
              },
            },
            detalleMaterial: {
              material: {
                _id: "4bce85615b36787c9bc135d3e5003d30",
                _rev: "4-608e01906c0b3470834301828cdf58f8",
                nombre: "durazno",
                defaultColor: "negro",
                colores: [
                  "negro",
                  "uva",
                  "beige",
                  "gena",
                  "rosa vieja",
                  "azul",
                ],
              },
              color:"azul"
            },
            detalleTallas: [
              {
                talla: {
                  _id: "4bce85615b36787c9bc135d3e50101c1",
                  _rev: "1-f8bf7618640b01ac916a189a53d981b1",
                  nombre: "3",
                  forro: "",
                  material: "",
                },
                cantidad: 0,
              },
              {
                talla: {
                  _id: "77266442b0d3fe22e6c0910bf1015a6e",
                  _rev: "2-99ef388d11f4065d178fad848649c38a",
                  nombre: "4",
                  forro: "",
                  material: "",
                },
                cantidad: 0,
              },
              {
                talla: {
                  _id: "77266442b0d3fe22e6c0910bf1015ce6",
                  _rev: "2-6bc4b6ec646f325b8dc1ae34aea3c8fb",
                  nombre: "5",
                  forro: "",
                  material: "",
                },
                cantidad: 1,
              },
              {
                talla: {
                  _id: "77266442b0d3fe22e6c0910bf1016646",
                  _rev: "2-045dc7aea0000b06f9eb3c40aebb6903",
                  nombre: "6",
                  forro: "",
                  material: "",
                },
                cantidad: 0,
              },
              {
                talla: {
                  _id: "77266442b0d3fe22e6c0910bf1016f1e",
                  _rev: "2-7be6fb6519f9e55d1d682438ac81c5f0",
                  nombre: "7",
                  forro: "",
                  material: "",
                },
                cantidad: 2,
              },
              {
                talla: {
                  _id: "77266442b0d3fe22e6c0910bf1017391",
                  _rev: "2-ea70cc29d499c041d982ea98561f0642",
                  nombre: "8",
                  forro: "",
                  material: "",
                },
                cantidad: 1,
              },
              {
                talla: {
                  _id: "77266442b0d3fe22e6c0910bf1017e8d",
                  _rev: "2-60a0f024b0eb5e75cb44d5f34530dacc",
                  nombre: "9",
                  forro: "",
                  material: "",
                },
                cantidad: 2,
              },
            ],
            horma: {
              _id: "25ed0e000c5ec314b560091076002edc",
              _rev: "1-d5f3036d2e7af89b47d90692d949c533",
              nombre: "hormaEjemplo",
            },
            detalleForro: {
              forro: {
                _id: "4bce85615b36787c9bc135d3e500d4ce",
                _rev: "2-b30aef3e5346a85306a10242d652e3bf",
                nombre: "tricot",
                defaultColor: "gris",
                colores: ["negro", "gris"],
              },
              color: null,
            },
            detalleSuela: {
              suela: {
                _id: "4bce85615b36787c9bc135d3e500d924",
                _rev: "3-7713ed3c9755ec6b9db5009e76499e01",
                nombre: "op",
                defaultColor: "negro",
                colores: ["gun", "negro"],
              },
              color: null,
            },
            subtotal: 6,
          },
          {
            estilo: {
              _id: "4bce85615b36787c9bc135d3e500b9af",
              _rev: "19-32385cdc12d06a7c2bbca0f70f6823a5",
              codigo: "TA6",
              descripcion: "",
              tacon: true,
              _attachments: {
                img: {
                  content_type: "image/jpeg",
                  revpos: 19,
                  digest: "md5-krxOiwoao+T5SEl0bYdpqQ==",
                  length: 9670,
                  stub: true,
                },
              },
            },
            detalleMaterial: {
              material: {
                _id: "4bce85615b36787c9bc135d3e5003d30",
                _rev: "4-608e01906c0b3470834301828cdf58f8",
                nombre: "durazno",
                defaultColor: "negro",
                colores: [
                  "negro",
                  "uva",
                  "beige",
                  "gena",
                  "rosa vieja",
                  "azul",
                ],
              },
            },
            detalleTallas: [
              {
                talla: {
                  _id: "4bce85615b36787c9bc135d3e50101c1",
                  _rev: "1-f8bf7618640b01ac916a189a53d981b1",
                  nombre: "3",
                  forro: "",
                  material: "",
                },
                cantidad: 0,
              },
              {
                talla: {
                  _id: "77266442b0d3fe22e6c0910bf1015a6e",
                  _rev: "2-99ef388d11f4065d178fad848649c38a",
                  nombre: "4",
                  forro: "",
                  material: "",
                },
                cantidad: 0,
              },
              {
                talla: {
                  _id: "77266442b0d3fe22e6c0910bf1015ce6",
                  _rev: "2-6bc4b6ec646f325b8dc1ae34aea3c8fb",
                  nombre: "5",
                  forro: "",
                  material: "",
                },
                cantidad: 2,
              },
              {
                talla: {
                  _id: "77266442b0d3fe22e6c0910bf1016646",
                  _rev: "2-045dc7aea0000b06f9eb3c40aebb6903",
                  nombre: "6",
                  forro: "",
                  material: "",
                },
                cantidad: 2,
              },
              {
                talla: {
                  _id: "77266442b0d3fe22e6c0910bf1016f1e",
                  _rev: "2-7be6fb6519f9e55d1d682438ac81c5f0",
                  nombre: "7",
                  forro: "",
                  material: "",
                },
                cantidad: 0,
              },
              {
                talla: {
                  _id: "77266442b0d3fe22e6c0910bf1017391",
                  _rev: "2-ea70cc29d499c041d982ea98561f0642",
                  nombre: "8",
                  forro: "",
                  material: "",
                },
                cantidad: 3,
              },
              {
                talla: {
                  _id: "77266442b0d3fe22e6c0910bf1017e8d",
                  _rev: "2-60a0f024b0eb5e75cb44d5f34530dacc",
                  nombre: "9",
                  forro: "",
                  material: "",
                },
                cantidad: 2,
              },
            ],
            horma: {
              _id: "25ed0e000c5ec314b560091076002edc",
              _rev: "1-d5f3036d2e7af89b47d90692d949c533",
              nombre: "hormaEjemplo",
            },
            detalleForro: {
              forro: {
                _id: "4bce85615b36787c9bc135d3e500d4ce",
                _rev: "2-b30aef3e5346a85306a10242d652e3bf",
                nombre: "tricot",
                defaultColor: "gris",
                colores: ["negro", "gris"],
              },
              color: null,
            },
            detalleSuela: {
              suela: {
                _id: "4bce85615b36787c9bc135d3e500d924",
                _rev: "3-7713ed3c9755ec6b9db5009e76499e01",
                nombre: "op",
                defaultColor: "negro",
                colores: ["gun", "negro"],
              },
              color: null,
            },
            subtotal: 9,
          },
        ],
        total: 15,
      },
    };
  },
  methods: {
    //...mapMutations(["ocultarBarra"]),
    imprimir() {
      window.print();
    },
  },

  computed: {

  },
  created() {
    //this.ocultarBarra();
  },
};
</script>

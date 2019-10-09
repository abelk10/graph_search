//Graph 1
gr_1 = new Graph('graph', 15, true);
a = new Node('A', 50, 50);
b = new Node('B', 220, 50);
c = new Node('C', 135, 135);
d = new Node('D', 50, 220);
e = new Node('E', 220, 220);
f = new Node('F', 350, 135);
g = new Node('G', 480, 50);
h = new Node('H', 650, 50);
i = new Node('I', 565, 135);
j = new Node('J', 480, 220);
k = new Node('K', 650, 220);
gr_1.addNode(a);
gr_1.addNode(b);
gr_1.addNode(c);
gr_1.addNode(d);
gr_1.addNode(e);
gr_1.addNode(f);
gr_1.addNode(g);
gr_1.addNode(h);
gr_1.addNode(i);
gr_1.addNode(j);
gr_1.addNode(k);
gr_1.addEdge(a, b);
gr_1.addEdge(b, e);
gr_1.addEdge(e, d);
gr_1.addEdge(d, a);
gr_1.addEdge(b, f);
gr_1.addEdge(e, f);
gr_1.addEdge(a, c);
gr_1.addEdge(b, c);
gr_1.addEdge(e, c);
gr_1.addEdge(d, c);

gr_1.addEdge(g, h);
gr_1.addEdge(h, k);
gr_1.addEdge(k, j);
gr_1.addEdge(j, g);
gr_1.addEdge(j, f);
gr_1.addEdge(g, f);
gr_1.addEdge(g, i);
gr_1.addEdge(h, i);
gr_1.addEdge(k, i);
gr_1.addEdge(j, i);

ar = ['a','b','c','d','e','f','g','h','i','j','k'];
// for(var i=0; i < ar.length-1; i++){
//     for(var j=i+1; j <= ar.length; j++){
//         eval('gr_1.addEdge('+ar[i]+','+ar[j]+');');
//     }
// }

// gr_1.setStartEnd(a);
// gr_1.setStartEnd(k, false);
gr_1.clear();


var RESIZE = 1.5;
var OFFSET = 0;
gr_2 = new Graph('graph', 5, false);

n1 = new Node('n1', 22 * RESIZE + OFFSET, 178 * RESIZE + OFFSET);
gr_2.addNode(n1);
n2 = new Node('n2', 69 * RESIZE + OFFSET, 131 * RESIZE + OFFSET);
gr_2.addNode(n2);
n3 = new Node('n3', 132 * RESIZE + OFFSET, 45 * RESIZE + OFFSET);
gr_2.addNode(n3);
n4 = new Node('n4', 70 * RESIZE + OFFSET, 195 * RESIZE + OFFSET);
gr_2.addNode(n4);
n5 = new Node('n5', 111 * RESIZE + OFFSET, 204 * RESIZE + OFFSET);
gr_2.addNode(n5);
n6 = new Node('n6', 123 * RESIZE + OFFSET, 167 * RESIZE + OFFSET);
gr_2.addNode(n6);
n7 = new Node('n7', 180 * RESIZE + OFFSET, 85 * RESIZE + OFFSET);
gr_2.addNode(n7);
n8 = new Node('n8', 220 * RESIZE + OFFSET, 34 * RESIZE + OFFSET);
gr_2.addNode(n8);
n9 = new Node('n9', 241 * RESIZE + OFFSET, 35 * RESIZE + OFFSET);
gr_2.addNode(n9);
n10 = new Node('n10', 265 * RESIZE + OFFSET, 37 * RESIZE + OFFSET);
gr_2.addNode(n10);
n11 = new Node('n11', 287 * RESIZE + OFFSET, 38 * RESIZE + OFFSET);
gr_2.addNode(n11);
n12 = new Node('n12', 310 * RESIZE + OFFSET, 36 * RESIZE + OFFSET);
gr_2.addNode(n12);
n13 = new Node('n13', 185 * RESIZE + OFFSET, 225 * RESIZE + OFFSET);
gr_2.addNode(n13);
n14 = new Node('n14', 218 * RESIZE + OFFSET, 176 * RESIZE + OFFSET);
gr_2.addNode(n14);
n15 = new Node('n15', 247 * RESIZE + OFFSET, 136 * RESIZE + OFFSET);
gr_2.addNode(n15);
n16 = new Node('n16', 278 * RESIZE + OFFSET, 88 * RESIZE + OFFSET);
gr_2.addNode(n16);
n17 = new Node('n17', 187 * RESIZE + OFFSET, 306 * RESIZE + OFFSET);
gr_2.addNode(n17);
n18 = new Node('n18', 233 * RESIZE + OFFSET, 246 * RESIZE + OFFSET);
gr_2.addNode(n18);
n19 = new Node('n19', 256 * RESIZE + OFFSET, 208 * RESIZE + OFFSET);
gr_2.addNode(n19);
n20 = new Node('n20', 273 * RESIZE + OFFSET, 275 * RESIZE + OFFSET);
gr_2.addNode(n20);
n21 = new Node('n21', 333 * RESIZE + OFFSET, 200 * RESIZE + OFFSET);
gr_2.addNode(n21);
n22 = new Node('n22', 371 * RESIZE + OFFSET, 127 * RESIZE + OFFSET);
gr_2.addNode(n22);
n23 = new Node('n23', 404 * RESIZE + OFFSET, 75 * RESIZE + OFFSET);
gr_2.addNode(n23);
n24 = new Node('n24', 427 * RESIZE + OFFSET, 36 * RESIZE + OFFSET);
gr_2.addNode(n24);
n25 = new Node('n25', 341 * RESIZE + OFFSET, 326 * RESIZE + OFFSET);
gr_2.addNode(n25);
n26 = new Node('n26', 405 * RESIZE + OFFSET, 268 * RESIZE + OFFSET);
gr_2.addNode(n26);
n27 = new Node('n27', 431 * RESIZE + OFFSET, 205 * RESIZE + OFFSET);
gr_2.addNode(n27);
n28 = new Node('n28', 456 * RESIZE + OFFSET, 154 * RESIZE + OFFSET);
gr_2.addNode(n28);
n29 = new Node('n29', 472 * RESIZE + OFFSET, 306 * RESIZE + OFFSET);
gr_2.addNode(n29);
n30 = new Node('n30', 505 * RESIZE + OFFSET, 236 * RESIZE + OFFSET);
gr_2.addNode(n30);
n31 = new Node('n31', 535 * RESIZE + OFFSET, 178 * RESIZE + OFFSET);
gr_2.addNode(n31);
n32 = new Node('n32', 550 * RESIZE + OFFSET, 128 * RESIZE + OFFSET);
gr_2.addNode(n32);
n33 = new Node('n33', 560 * RESIZE + OFFSET, 105 * RESIZE + OFFSET);
gr_2.addNode(n33);
n34 = new Node('n34', 574 * RESIZE + OFFSET, 75 * RESIZE + OFFSET);
gr_2.addNode(n34);
n35 = new Node('n35', 490 * RESIZE + OFFSET, 318 * RESIZE + OFFSET);
gr_2.addNode(n35);
n36 = new Node('n36', 564 * RESIZE + OFFSET, 190 * RESIZE + OFFSET);
gr_2.addNode(n36);
n37 = new Node('n37', 589 * RESIZE + OFFSET, 137 * RESIZE + OFFSET);
gr_2.addNode(n37);
n38 = new Node('n38', 559 * RESIZE + OFFSET, 320 * RESIZE + OFFSET);
gr_2.addNode(n38);
n39 = new Node('n39', 576 * RESIZE + OFFSET, 268 * RESIZE + OFFSET);
gr_2.addNode(n39);
n40 = new Node('n40', 590 * RESIZE + OFFSET, 197 * RESIZE + OFFSET);
gr_2.addNode(n40);

gr_2.addEdge(n1, n2);
gr_2.addEdge(n2, n3);
gr_2.addEdge(n3, n8);
gr_2.addEdge(n8, n9);
gr_2.addEdge(n9, n10);
gr_2.addEdge(n10, n11);
gr_2.addEdge(n11, n12);
gr_2.addEdge(n1, n4);
gr_2.addEdge(n2, n6);
gr_2.addEdge(n3, n7);
gr_2.addEdge(n4, n5);
gr_2.addEdge(n5, n6);
gr_2.addEdge(n6, n7);
gr_2.addEdge(n6, n13);
gr_2.addEdge(n7, n15);
gr_2.addEdge(n7, n16);
gr_2.addEdge(n13, n14);
gr_2.addEdge(n14, n15);
gr_2.addEdge(n15, n16);
gr_2.addEdge(n16, n12);
gr_2.addEdge(n1, n17);
gr_2.addEdge(n13, n18);
gr_2.addEdge(n17, n18);
gr_2.addEdge(n14, n19);
gr_2.addEdge(n15, n21);
gr_2.addEdge(n18, n20);
gr_2.addEdge(n20, n21);
gr_2.addEdge(n21, n22);
gr_2.addEdge(n22, n23);
gr_2.addEdge(n23, n24);
gr_2.addEdge(n20, n25);
gr_2.addEdge(n21, n26);
gr_2.addEdge(n22, n28);
gr_2.addEdge(n25, n26);
gr_2.addEdge(n26, n27);
gr_2.addEdge(n27, n28);
gr_2.addEdge(n26, n29);
gr_2.addEdge(n27, n30);
gr_2.addEdge(n28, n31);
gr_2.addEdge(n23, n32);
gr_2.addEdge(n24, n34);
gr_2.addEdge(n29, n30);
gr_2.addEdge(n30, n31);
gr_2.addEdge(n31, n32);
gr_2.addEdge(n32, n33);
gr_2.addEdge(n33, n34);
gr_2.addEdge(n29, n35);
gr_2.addEdge(n31, n36);
gr_2.addEdge(n33, n37);
gr_2.addEdge(n36, n37);
gr_2.addEdge(n35, n38);
gr_2.addEdge(n36, n40);
gr_2.addEdge(n38, n39);
gr_2.addEdge(n39, n40);

// gr_2.setStartEnd(n1);
// gr_2.setStartEnd(n39, false);
gr_2.clear();


graphs =  {graph1: gr_1, graph2: gr_2};
function getGraph(name){
        return graphs[name];
}
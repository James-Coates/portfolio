// exports.createPages = async ({ actions: { createPage }, graphql }) => {
//   try {
//     const { data } = await graphql(`
//       {
//         allProjectsJson {
//           edges {
//             node {
//               slug
//               id
//             }
//           }
//         }
//       }
//     `);
//     data.allProjectsJson.edges.forEach((edge) => {
//       const project = edge.node;
//       createPage({
//         path: `/projects/${project.slug}`,
//         component: require.resolve('./src/templates/project/index.js'),
//         context: {
//           id: project.id,
//         },
//       });
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }
const TransformationPage = () => {
  return <div>TransformationPage</div>;
};

export default TransformationPage;
// Dynamic Routes
// When you don't know the exact segment names ahead of time and
//want to create routes from dynamic data, you can use Dynamic Segments that
//are filled in at request time or prerendered at build time.
/**
 * A Dynamic Segment can be created by wrapping a folder's name in square 
 *  brackets: [folderName]. For example, [id] or [slug].
    Dynamic Segments are passed as the params prop to layout,
    page, route, and generateMetadata functions.
 */

//localhost:3000/tranformations
//localhost:3000/transformations/[id]our[slug]

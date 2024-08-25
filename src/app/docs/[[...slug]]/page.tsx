//If we don't want to provide the routes as nested dynamic routes in nextjs, we can use catch-all segments feature.

export default ({
  params,
}: {
  params: {
    slug: string[]; //we can have multiple route parameters  eg docs/feature, docs/feature/concept, docs/feature/concept/example
  };
}) => {
    if(params?.slug?.length === 2) {
        return <h1>Viewing docs for feature {params.slug[0]} and  concept {params.slug[1]}</h1>  //This will match for  docs/feature/concept
    }
    else if(params?.slug?.length === 1) {
        return <h1>Viewing docs for feature{params.slug[0]}</h1>  //This will match for docs/feature
    }
    //Note:- Untill we enable optional catch-all-segment feature, localhost:3000/docs will return 404. To enable this we have to wrap,slug folder into two square brackets [[...slug]]
  return <h1>Docs Home Page!</h1>; //It will match any url that contains docs segment in the path 
};

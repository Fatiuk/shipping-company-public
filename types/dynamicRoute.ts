export default interface DynamicRouteI {
	params: Promise<{ slug: string }>;
}
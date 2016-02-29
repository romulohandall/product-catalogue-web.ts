/**
 * ContentfulModel holds configuration values to communicate with
 * Contentful's Delivery API.
 *
 * The default setup uses the space shared with the ios and android demo apps.
 *
 */
export class ContentfulModel {
  constructor(public spaceId:string = "rue07lqzt1co",
              public apiKey:string = "ece0f8fa62ac82fd11f4ceb8876a6afa7a28ef0dad813f890d391406caf1cd0e",
              public productContentType:string = '2PqfXUJwE8qSYKuM0U6w8M',
              public categoryContentType:string = '6XwpTaSiiI2Ak2Ww0oi6qa') {
  }
}


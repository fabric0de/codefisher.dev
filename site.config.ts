import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '15869bf8a344800eb94debaf46c50120',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '코드를 낚는 사람',
  domain: 'codefisher.dev',
  author: 'kim junghyeon',

  // open graph metadata (optional)
  description: '코드를 낚는 사람의 개발 블로그',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'fabric0de',
  linkedin: 'junghyeonkim',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/portfolio': '42653a19e5d44660a9ebc7268d3c0bc0',
    '/blog': '15869bf8a344800eb94debaf46c50120'
  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.

  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Blog',
      pageId: '15869bf8a344800eb94debaf46c50120'
    },
    {
      title: 'Portfolio',
      pageId: '42653a19e5d44660a9ebc7268d3c0bc0'
    }
  ]
})

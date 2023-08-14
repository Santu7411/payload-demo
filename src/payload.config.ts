import { buildConfig } from 'payload/config';
import path from 'path';
import Categories from './collections/Categories';
import Products from './collections/Products';
import Skus from './collections/Skus';
import Gifts from './collections/Gifts';
import Targets from './collections/Targets';
import Campaigns from './collections/Campaigns';
import Assets from './collections/Assets';
import TouchPoints from './collections/TouchPoints';
import Engagements from './collections/Engagements';
import GWPs from './collections/GWPs';
import Achievements from './collections/Achievements';
import Wallets from './collections/Wallets';
import Feeds from './collections/Feeds';
import Slides from './collections/Slides';
import Pages from './collections/Pages';
import Forms from './collections/Forms';
import Notifications from './collections/Notifications';
import Hints from './collections/Hints';
import Resources from './collections/Resources';
import References from './collections/References';
import Coupons from './collections/Coupons';
import Badges from './collections/Badges';
import Tags from './collections/Tags';
import Users from './collections/Users';
import Media from './collections/Media';
import CalculatedEvents from './collections/CalculatedEvents';
import InteractiveEvents from './collections/InteractiveEvents copy';
import CartPromotions from './collections/CartPromotions';
import RealtimeInteractives from './collections/RealtimeInteractives';
import CustomEvents from './collections/CustomEvents';
import CouponRules from './collections/CouponRules';
import PointsRules from './collections/PointsRules';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [Categories, Campaigns, Feeds, TouchPoints, Products, Skus, Engagements, CartPromotions, RealtimeInteractives, CustomEvents, CouponRules, PointsRules, Assets, Targets, CalculatedEvents, InteractiveEvents, Wallets, Achievements, GWPs, Slides, Pages,Forms, Notifications, Hints, Resources,References, Tags, Users, Media, Gifts, Coupons, Badges],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
})

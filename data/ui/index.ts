import type { UIItem } from "@/types/ui";

import { accordion } from "./accordion";
import { activityFeed } from "./activity-feed";
import { alertDialog } from "./alert-dialog";
import { announcementBar } from "./announcement-bar";
import { avatar } from "./avatar";
import { backToTop } from "./back-to-top";
import { badge } from "./badge";
import { banner } from "./banner";
import { barChart } from "./bar-chart";
import { bottomNavigation } from "./bottom-navigation";
import { bottomSheet } from "./bottom-sheet";
import { breadcrumb } from "./breadcrumb";
import { button } from "./button";
import { calendarView } from "./calendar-view";
import { card } from "./card";
import { carousel } from "./carousel";
import { cartDrawer } from "./cart-drawer";
import { chatInput } from "./chat-input";
import { checkbox } from "./checkbox";
import { checkoutForm } from "./checkout-form";
import { combobox } from "./combobox";
import { commandPalette } from "./command-palette";
import { comparisonTable } from "./comparison-table";
import { contextMenu } from "./context-menu";
import { ctaSection } from "./cta-section";
import { dataTable } from "./data-table";
import { datePicker } from "./date-picker";
import { donutChart } from "./donut-chart";
import { drawer } from "./drawer";
import { dropdownMenu } from "./dropdown-menu";
import { emptyState } from "./empty-state";
import { errorPage } from "./error-page";
import { faq } from "./faq";
import { featureSection } from "./feature-section";
import { fileUpload } from "./file-upload";
import { filterPanel } from "./filter-panel";
import { floatingActionButton } from "./floating-action-button";
import { footer } from "./footer";
import { formValidation } from "./form-validation";
import { hamburgerMenu } from "./hamburger-menu";
import { heroSection } from "./hero-section";
import { iconButton } from "./icon-button";
import { imageGallery } from "./image-gallery";
import { infiniteScroll } from "./infinite-scroll";
import { inlineError } from "./inline-error";
import { kanbanBoard } from "./kanban-board";
import { kpiCard } from "./kpi-card";
import { lineChart } from "./line-chart";
import { loadMore } from "./load-more";
import { loginForm } from "./login-form";
import { logoCloud } from "./logo-cloud";
import { megaMenu } from "./mega-menu";
import { messageBubble } from "./message-bubble";
import { modal } from "./modal";
import { multiStepForm } from "./multi-step-form";
import { navbar } from "./navbar";
import { newsletterSignup } from "./newsletter-signup";
import { notificationCenter } from "./notification-center";
import { onboardingChecklist } from "./onboarding-checklist";
import { otpInput } from "./otp-input";
import { pagination } from "./pagination";
import { passwordInput } from "./password-input";
import { popover } from "./popover";
import { pricingTable } from "./pricing-table";
import { productCard } from "./product-card";
import { productTour } from "./product-tour";
import { profileHeader } from "./profile-header";
import { progressBar } from "./progress-bar";
import { pullToRefresh } from "./pull-to-refresh";
import { radioButton } from "./radio-button";
import { reviewCard } from "./review-card";
import { richMenu } from "./rich-menu";
import { scrollspy } from "./scrollspy";
import { searchBar } from "./search-bar";
import { segmentedControl } from "./segmented-control";
import { select } from "./select";
import { settingsPage } from "./settings-page";
import { sidebar } from "./sidebar";
import { skeleton } from "./skeleton";
import { slider } from "./slider";
import { snackbar } from "./snackbar";
import { socialLogin } from "./social-login";
import { sparkline } from "./sparkline";
import { spinner } from "./spinner";
import { splitButton } from "./split-button";
import { starRating } from "./star-rating";
import { stepper } from "./stepper";
import { stickyHeader } from "./sticky-header";
import { tableOfContents } from "./table-of-contents";
import { tabs } from "./tabs";
import { tagInput } from "./tag-input";
import { testimonials } from "./testimonials";
import { textField } from "./text-field";
import { textarea } from "./textarea";
import { timeline } from "./timeline";
import { toast } from "./toast";
import { toggleSwitch } from "./toggle-switch";
import { tooltip } from "./tooltip";
import { typingIndicator } from "./typing-indicator";
import { userMenu } from "./user-menu";

/** 全UIアイテム（名前順） */
export const uiItems: UIItem[] = [
  accordion,
  activityFeed,
  alertDialog,
  announcementBar,
  avatar,
  backToTop,
  badge,
  banner,
  barChart,
  bottomNavigation,
  bottomSheet,
  breadcrumb,
  button,
  calendarView,
  card,
  carousel,
  cartDrawer,
  chatInput,
  checkbox,
  checkoutForm,
  combobox,
  commandPalette,
  comparisonTable,
  contextMenu,
  ctaSection,
  dataTable,
  datePicker,
  donutChart,
  drawer,
  dropdownMenu,
  emptyState,
  errorPage,
  faq,
  featureSection,
  fileUpload,
  filterPanel,
  floatingActionButton,
  footer,
  formValidation,
  hamburgerMenu,
  heroSection,
  iconButton,
  imageGallery,
  infiniteScroll,
  inlineError,
  kanbanBoard,
  kpiCard,
  lineChart,
  loadMore,
  loginForm,
  logoCloud,
  megaMenu,
  messageBubble,
  modal,
  multiStepForm,
  navbar,
  newsletterSignup,
  notificationCenter,
  onboardingChecklist,
  otpInput,
  pagination,
  passwordInput,
  popover,
  pricingTable,
  productCard,
  productTour,
  profileHeader,
  progressBar,
  pullToRefresh,
  radioButton,
  reviewCard,
  richMenu,
  scrollspy,
  searchBar,
  segmentedControl,
  select,
  settingsPage,
  sidebar,
  skeleton,
  slider,
  snackbar,
  socialLogin,
  sparkline,
  spinner,
  splitButton,
  starRating,
  stepper,
  stickyHeader,
  tableOfContents,
  tabs,
  tagInput,
  testimonials,
  textField,
  textarea,
  timeline,
  toast,
  toggleSwitch,
  tooltip,
  typingIndicator,
  userMenu,
].sort((a, b) => a.name.localeCompare(b.name));

export function getUIItem(slug: string): UIItem | undefined {
  return uiItems.find((i) => i.slug === slug);
}

export function getItemsByCategory(categorySlug: string): UIItem[] {
  return uiItems.filter((i) => i.category === categorySlug);
}

export function getItemsByCollection(collectionSlug: string): UIItem[] {
  return uiItems.filter((i) => i.collections?.includes(collectionSlug));
}

/** 閲覧数ランキング */
export const rankingItems: UIItem[] = [...uiItems].sort(
  (a, b) => b.views - a.views,
);

/** 人気タグ（出現頻度順） */
export const popularTags: { tag: string; count: number }[] = Object.entries(
  uiItems
    .flatMap((i) => i.tags)
    .reduce<Record<string, number>>((acc, t) => {
      acc[t] = (acc[t] ?? 0) + 1;
      return acc;
    }, {}),
)
  .map(([tag, count]) => ({ tag, count }))
  .sort((a, b) => b.count - a.count);

/// <reference path="android-declarations.d.ts"/>

declare module android {
	export module support {
		export module v7 {
			export module app {
				export abstract class ActionBar {
					public static class: java.lang.Class<android.support.v7.app.ActionBar>;
					public static NAVIGATION_MODE_STANDARD: number;
					public static NAVIGATION_MODE_LIST: number;
					public static NAVIGATION_MODE_TABS: number;
					public static DISPLAY_USE_LOGO: number;
					public static DISPLAY_SHOW_HOME: number;
					public static DISPLAY_HOME_AS_UP: number;
					public static DISPLAY_SHOW_TITLE: number;
					public static DISPLAY_SHOW_CUSTOM: number;
					public setLogo(param0: number): void;
					public getTitle(): string;
					public invalidateOptionsMenu(): boolean;
					public isShowing(): boolean;
					public getElevation(): number;
					public setTitle(param0: string): void;
					public addOnMenuVisibilityListener(param0: android.support.v7.app.ActionBar.OnMenuVisibilityListener): void;
					/** @deprecated */
					public removeTab(param0: android.support.v7.app.ActionBar.Tab): void;
					/** @deprecated */
					public getSelectedNavigationIndex(): number;
					public setDisplayShowCustomEnabled(param0: boolean): void;
					/** @deprecated */
					public setNavigationMode(param0: number): void;
					public setDefaultDisplayHomeAsUpEnabled(param0: boolean): void;
					public getCustomView(): android.view.View;
					/** @deprecated */
					public removeAllTabs(): void;
					public removeOnMenuVisibilityListener(param0: android.support.v7.app.ActionBar.OnMenuVisibilityListener): void;
					public isHideOnContentScrollEnabled(): boolean;
					public setDisplayShowHomeEnabled(param0: boolean): void;
					public constructor();
					public onMenuKeyEvent(param0: android.view.KeyEvent): boolean;
					public setIcon(param0: android.graphics.drawable.Drawable): void;
					/** @deprecated */
					public addTab(param0: android.support.v7.app.ActionBar.Tab, param1: number): void;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
					public startActionMode(param0: android.support.v7.view.ActionMode.Callback): android.support.v7.view.ActionMode;
					/** @deprecated */
					public getTabCount(): number;
					public setSplitBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					/** @deprecated */
					public addTab(param0: android.support.v7.app.ActionBar.Tab, param1: number, param2: boolean): void;
					public setHideOnContentScrollEnabled(param0: boolean): void;
					public show(): void;
					/** @deprecated */
					public addTab(param0: android.support.v7.app.ActionBar.Tab): void;
					public setDisplayOptions(param0: number, param1: number): void;
					public getHeight(): number;
					public setDisplayOptions(param0: number): void;
					public setStackedBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					/** @deprecated */
					public removeTabAt(param0: number): void;
					public isTitleTruncated(): boolean;
					public setTitle(param0: number): void;
					public setLogo(param0: android.graphics.drawable.Drawable): void;
					public setIcon(param0: number): void;
					public closeOptionsMenu(): boolean;
					/** @deprecated */
					public getNavigationMode(): number;
					public collapseActionView(): boolean;
					/** @deprecated */
					public getSelectedTab(): android.support.v7.app.ActionBar.Tab;
					public setCustomView(param0: android.view.View): void;
					public hide(): void;
					public setHideOffset(param0: number): void;
					public setDisplayUseLogoEnabled(param0: boolean): void;
					public setDisplayShowTitleEnabled(param0: boolean): void;
					/** @deprecated */
					public selectTab(param0: android.support.v7.app.ActionBar.Tab): void;
					public onKeyShortcut(param0: number, param1: android.view.KeyEvent): boolean;
					public setCustomView(param0: number): void;
					public setShowHideAnimationEnabled(param0: boolean): void;
					public setHomeActionContentDescription(param0: string): void;
					public setElevation(param0: number): void;
					public setSubtitle(param0: number): void;
					/** @deprecated */
					public setListNavigationCallbacks(param0: android.widget.SpinnerAdapter, param1: android.support.v7.app.ActionBar.OnNavigationListener): void;
					/** @deprecated */
					public getNavigationItemCount(): number;
					public dispatchMenuVisibilityChanged(param0: boolean): void;
					public setCustomView(param0: android.view.View, param1: android.support.v7.app.ActionBar.LayoutParams): void;
					public setHomeActionContentDescription(param0: number): void;
					/** @deprecated */
					public setSelectedNavigationItem(param0: number): void;
					/** @deprecated */
					public getTabAt(param0: number): android.support.v7.app.ActionBar.Tab;
					public getThemedContext(): android.content.Context;
					public setHomeAsUpIndicator(param0: android.graphics.drawable.Drawable): void;
					public setDisplayHomeAsUpEnabled(param0: boolean): void;
					public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					/** @deprecated */
					public newTab(): android.support.v7.app.ActionBar.Tab;
					public openOptionsMenu(): boolean;
					public setSubtitle(param0: string): void;
					public getSubtitle(): string;
					public getDisplayOptions(): number;
					public getHideOffset(): number;
					/** @deprecated */
					public addTab(param0: android.support.v7.app.ActionBar.Tab, param1: boolean): void;
					public setHomeButtonEnabled(param0: boolean): void;
					public setWindowTitle(param0: string): void;
					public setHomeAsUpIndicator(param0: number): void;
				}
				export module ActionBar {
					export class DisplayOptions {
						public static class: java.lang.Class<android.support.v7.app.ActionBar.DisplayOptions>;
						/**
						 * Constructs a new instance of the android.support.v7.app.ActionBar$DisplayOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {});
						public constructor();
					}
					export class LayoutParams {
						public static class: java.lang.Class<android.support.v7.app.ActionBar.LayoutParams>;
						public gravity: number;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public constructor(param0: android.view.ViewGroup.LayoutParams);
						public constructor(param0: number);
						public constructor(param0: android.support.v7.app.ActionBar.LayoutParams);
						public constructor(param0: number, param1: number, param2: number);
						public constructor(param0: number, param1: number);
					}
					export class NavigationMode {
						public static class: java.lang.Class<android.support.v7.app.ActionBar.NavigationMode>;
						/**
						 * Constructs a new instance of the android.support.v7.app.ActionBar$NavigationMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {});
						public constructor();
					}
					export class OnMenuVisibilityListener {
						public static class: java.lang.Class<android.support.v7.app.ActionBar.OnMenuVisibilityListener>;
						/**
						 * Constructs a new instance of the android.support.v7.app.ActionBar$OnMenuVisibilityListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onMenuVisibilityChanged(param0: boolean): void });
						public constructor();
						public onMenuVisibilityChanged(param0: boolean): void;
					}
					export class OnNavigationListener {
						public static class: java.lang.Class<android.support.v7.app.ActionBar.OnNavigationListener>;
						/**
						 * Constructs a new instance of the android.support.v7.app.ActionBar$OnNavigationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onNavigationItemSelected(param0: number, param1: number): boolean });
						public constructor();
						public onNavigationItemSelected(param0: number, param1: number): boolean;
					}
					export abstract class Tab {
						public static class: java.lang.Class<android.support.v7.app.ActionBar.Tab>;
						public static INVALID_POSITION: number;
						public setTag(param0: any): android.support.v7.app.ActionBar.Tab;
						public constructor();
						public getPosition(): number;
						public setIcon(param0: android.graphics.drawable.Drawable): android.support.v7.app.ActionBar.Tab;
						public setCustomView(param0: number): android.support.v7.app.ActionBar.Tab;
						public setTabListener(param0: android.support.v7.app.ActionBar.TabListener): android.support.v7.app.ActionBar.Tab;
						public getText(): string;
						public setContentDescription(param0: number): android.support.v7.app.ActionBar.Tab;
						public setText(param0: string): android.support.v7.app.ActionBar.Tab;
						public setIcon(param0: number): android.support.v7.app.ActionBar.Tab;
						public setText(param0: number): android.support.v7.app.ActionBar.Tab;
						public getTag(): any;
						public getCustomView(): android.view.View;
						public getIcon(): android.graphics.drawable.Drawable;
						public setCustomView(param0: android.view.View): android.support.v7.app.ActionBar.Tab;
						public select(): void;
						public getContentDescription(): string;
						public setContentDescription(param0: string): android.support.v7.app.ActionBar.Tab;
					}
					export class TabListener {
						public static class: java.lang.Class<android.support.v7.app.ActionBar.TabListener>;
						/**
						 * Constructs a new instance of the android.support.v7.app.ActionBar$TabListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onTabSelected(param0: android.support.v7.app.ActionBar.Tab, param1: android.support.v4.app.FragmentTransaction): void; onTabUnselected(param0: android.support.v7.app.ActionBar.Tab, param1: android.support.v4.app.FragmentTransaction): void; onTabReselected(param0: android.support.v7.app.ActionBar.Tab, param1: android.support.v4.app.FragmentTransaction): void });
						public constructor();
						public onTabSelected(param0: android.support.v7.app.ActionBar.Tab, param1: android.support.v4.app.FragmentTransaction): void;
						public onTabUnselected(param0: android.support.v7.app.ActionBar.Tab, param1: android.support.v4.app.FragmentTransaction): void;
						public onTabReselected(param0: android.support.v7.app.ActionBar.Tab, param1: android.support.v4.app.FragmentTransaction): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class ActionBarDrawerToggle {
					public static class: java.lang.Class<android.support.v7.app.ActionBarDrawerToggle>;
					public setHomeAsUpIndicator(param0: android.graphics.drawable.Drawable): void;
					public syncState(): void;
					public getDrawerArrowDrawable(): android.support.v7.graphics.drawable.DrawerArrowDrawable;
					public isDrawerIndicatorEnabled(): boolean;
					public constructor(param0: android.app.Activity, param1: android.support.v4.widget.DrawerLayout, param2: number, param3: number);
					public setDrawerIndicatorEnabled(param0: boolean): void;
					public getToolbarNavigationClickListener(): android.view.View.OnClickListener;
					public onDrawerStateChanged(param0: number): void;
					public setDrawerSlideAnimationEnabled(param0: boolean): void;
					public constructor(param0: android.app.Activity, param1: android.support.v4.widget.DrawerLayout, param2: android.support.v7.widget.Toolbar, param3: number, param4: number);
					public setToolbarNavigationClickListener(param0: android.view.View.OnClickListener): void;
					public setDrawerArrowDrawable(param0: android.support.v7.graphics.drawable.DrawerArrowDrawable): void;
					public isDrawerSlideAnimationEnabled(): boolean;
					public onDrawerOpened(param0: android.view.View): void;
					public onDrawerClosed(param0: android.view.View): void;
					public onDrawerSlide(param0: android.view.View, param1: number): void;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
					public onOptionsItemSelected(param0: android.view.MenuItem): boolean;
					public setHomeAsUpIndicator(param0: number): void;
				}
				export module ActionBarDrawerToggle {
					export class Delegate {
						public static class: java.lang.Class<android.support.v7.app.ActionBarDrawerToggle.Delegate>;
						/**
						 * Constructs a new instance of the android.support.v7.app.ActionBarDrawerToggle$Delegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { setActionBarUpIndicator(param0: android.graphics.drawable.Drawable, param1: number): void; setActionBarDescription(param0: number): void; getThemeUpIndicator(): android.graphics.drawable.Drawable; getActionBarThemedContext(): android.content.Context; isNavigationVisible(): boolean });
						public constructor();
						public isNavigationVisible(): boolean;
						public getThemeUpIndicator(): android.graphics.drawable.Drawable;
						public getActionBarThemedContext(): android.content.Context;
						public setActionBarDescription(param0: number): void;
						public setActionBarUpIndicator(param0: android.graphics.drawable.Drawable, param1: number): void;
					}
					export class DelegateProvider {
						public static class: java.lang.Class<android.support.v7.app.ActionBarDrawerToggle.DelegateProvider>;
						/**
						 * Constructs a new instance of the android.support.v7.app.ActionBarDrawerToggle$DelegateProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getDrawerToggleDelegate(): android.support.v7.app.ActionBarDrawerToggle.Delegate });
						public constructor();
						public getDrawerToggleDelegate(): android.support.v7.app.ActionBarDrawerToggle.Delegate;
					}
					export class FrameworkActionBarDelegate extends android.support.v7.app.ActionBarDrawerToggle.Delegate {
						public static class: java.lang.Class<android.support.v7.app.ActionBarDrawerToggle.FrameworkActionBarDelegate>;
						public isNavigationVisible(): boolean;
						public getThemeUpIndicator(): android.graphics.drawable.Drawable;
						public getActionBarThemedContext(): android.content.Context;
						public setActionBarDescription(param0: number): void;
						public setActionBarUpIndicator(param0: android.graphics.drawable.Drawable, param1: number): void;
					}
					export class ToolbarCompatDelegate extends android.support.v7.app.ActionBarDrawerToggle.Delegate {
						public static class: java.lang.Class<android.support.v7.app.ActionBarDrawerToggle.ToolbarCompatDelegate>;
						public isNavigationVisible(): boolean;
						public getThemeUpIndicator(): android.graphics.drawable.Drawable;
						public getActionBarThemedContext(): android.content.Context;
						public setActionBarDescription(param0: number): void;
						public setActionBarUpIndicator(param0: android.graphics.drawable.Drawable, param1: number): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class ActionBarDrawerToggleHoneycomb {
					public static class: java.lang.Class<android.support.v7.app.ActionBarDrawerToggleHoneycomb>;
					public static getThemeUpIndicator(param0: android.app.Activity): android.graphics.drawable.Drawable;
					public static setActionBarUpIndicator(param0: android.support.v7.app.ActionBarDrawerToggleHoneycomb.SetIndicatorInfo, param1: android.app.Activity, param2: android.graphics.drawable.Drawable, param3: number): android.support.v7.app.ActionBarDrawerToggleHoneycomb.SetIndicatorInfo;
					public static setActionBarDescription(param0: android.support.v7.app.ActionBarDrawerToggleHoneycomb.SetIndicatorInfo, param1: android.app.Activity, param2: number): android.support.v7.app.ActionBarDrawerToggleHoneycomb.SetIndicatorInfo;
				}
				export module ActionBarDrawerToggleHoneycomb {
					export class SetIndicatorInfo {
						public static class: java.lang.Class<android.support.v7.app.ActionBarDrawerToggleHoneycomb.SetIndicatorInfo>;
						public setHomeAsUpIndicator: java.lang.reflect.Method;
						public setHomeActionContentDescription: java.lang.reflect.Method;
						public upIndicatorView: android.widget.ImageView;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class AlertController {
					public static class: java.lang.Class<android.support.v7.app.AlertController>;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public setView(param0: android.view.View): void;
					public installContent(): void;
					public setTitle(param0: string): void;
					public setView(param0: number): void;
					public setButton(param0: number, param1: string, param2: android.content.DialogInterface.OnClickListener, param3: android.os.Message, param4: android.graphics.drawable.Drawable): void;
					public setMessage(param0: string): void;
					public setButtonPanelLayoutHint(param0: number): void;
					public setIcon(param0: number): void;
					public setCustomTitle(param0: android.view.View): void;
					public getButton(param0: number): android.widget.Button;
					public setIcon(param0: android.graphics.drawable.Drawable): void;
					public getIconAttributeResId(param0: number): number;
					public constructor(param0: android.content.Context, param1: android.support.v7.app.AppCompatDialog, param2: android.view.Window);
					public setView(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public getListView(): android.widget.ListView;
				}
				export module AlertController {
					export class AlertParams {
						public static class: java.lang.Class<android.support.v7.app.AlertController.AlertParams>;
						public mContext: android.content.Context;
						public mInflater: android.view.LayoutInflater;
						public mIconId: number;
						public mIcon: android.graphics.drawable.Drawable;
						public mIconAttrId: number;
						public mTitle: string;
						public mCustomTitleView: android.view.View;
						public mMessage: string;
						public mPositiveButtonText: string;
						public mPositiveButtonIcon: android.graphics.drawable.Drawable;
						public mPositiveButtonListener: android.content.DialogInterface.OnClickListener;
						public mNegativeButtonText: string;
						public mNegativeButtonIcon: android.graphics.drawable.Drawable;
						public mNegativeButtonListener: android.content.DialogInterface.OnClickListener;
						public mNeutralButtonText: string;
						public mNeutralButtonIcon: android.graphics.drawable.Drawable;
						public mNeutralButtonListener: android.content.DialogInterface.OnClickListener;
						public mCancelable: boolean;
						public mOnCancelListener: android.content.DialogInterface.OnCancelListener;
						public mOnDismissListener: android.content.DialogInterface.OnDismissListener;
						public mOnKeyListener: android.content.DialogInterface.OnKeyListener;
						public mItems: androidNative.Array<string>;
						public mAdapter: android.widget.ListAdapter;
						public mOnClickListener: android.content.DialogInterface.OnClickListener;
						public mViewLayoutResId: number;
						public mView: android.view.View;
						public mViewSpacingLeft: number;
						public mViewSpacingTop: number;
						public mViewSpacingRight: number;
						public mViewSpacingBottom: number;
						public mViewSpacingSpecified: boolean;
						public mCheckedItems: androidNative.Array<boolean>;
						public mIsMultiChoice: boolean;
						public mIsSingleChoice: boolean;
						public mCheckedItem: number;
						public mOnCheckboxClickListener: android.content.DialogInterface.OnMultiChoiceClickListener;
						public mCursor: android.database.Cursor;
						public mLabelColumn: string;
						public mIsCheckedColumn: string;
						public mForceInverseBackground: boolean;
						public mOnItemSelectedListener: android.widget.AdapterView.OnItemSelectedListener;
						public mOnPrepareListViewListener: android.support.v7.app.AlertController.AlertParams.OnPrepareListViewListener;
						public mRecycleOnMeasure: boolean;
						public constructor(param0: android.content.Context);
						public apply(param0: android.support.v7.app.AlertController): void;
					}
					export module AlertParams {
						export class OnPrepareListViewListener {
							public static class: java.lang.Class<android.support.v7.app.AlertController.AlertParams.OnPrepareListViewListener>;
							/**
							 * Constructs a new instance of the android.support.v7.app.AlertController$AlertParams$OnPrepareListViewListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onPrepareListView(param0: android.widget.ListView): void });
							public constructor();
							public onPrepareListView(param0: android.widget.ListView): void;
						}
					}
					export class ButtonHandler {
						public static class: java.lang.Class<android.support.v7.app.AlertController.ButtonHandler>;
						public constructor(param0: android.content.DialogInterface);
						public handleMessage(param0: android.os.Message): void;
					}
					export class CheckedItemAdapter extends android.widget.ArrayAdapter<string> {
						public static class: java.lang.Class<android.support.v7.app.AlertController.CheckedItemAdapter>;
						public getItemId(param0: number): number;
						public hasStableIds(): boolean;
						public constructor(param0: android.content.Context, param1: number, param2: number, param3: androidNative.Array<string>);
					}
					export class RecycleListView {
						public static class: java.lang.Class<android.support.v7.app.AlertController.RecycleListView>;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public setHasDecor(param0: boolean, param1: boolean): void;
						public constructor(param0: android.content.Context);
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class AlertDialog extends android.support.v7.app.AppCompatDialog {
					public static class: java.lang.Class<android.support.v7.app.AlertDialog>;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public onSupportActionModeFinished(param0: android.support.v7.view.ActionMode): void;
					public constructor(param0: android.content.Context, param1: number);
					public setButton(param0: number, param1: string, param2: android.os.Message): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public setView(param0: android.view.View): void;
					public setTitle(param0: string): void;
					public setButton(param0: number, param1: string, param2: android.graphics.drawable.Drawable, param3: android.content.DialogInterface.OnClickListener): void;
					public setMessage(param0: string): void;
					public onWindowStartingSupportActionMode(param0: android.support.v7.view.ActionMode.Callback): android.support.v7.view.ActionMode;
					public onSupportActionModeStarted(param0: android.support.v7.view.ActionMode): void;
					public setTitle(param0: number): void;
					public constructor(param0: android.content.Context);
					public setIcon(param0: number): void;
					public setButton(param0: number, param1: string, param2: android.content.DialogInterface.OnClickListener): void;
					public onCreate(param0: android.os.Bundle): void;
					public setCustomTitle(param0: android.view.View): void;
					public getButton(param0: number): android.widget.Button;
					public setIconAttribute(param0: number): void;
					public constructor(param0: android.content.Context, param1: boolean, param2: android.content.DialogInterface.OnCancelListener);
					public setIcon(param0: android.graphics.drawable.Drawable): void;
					public getListView(): android.widget.ListView;
					public setView(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
				}
				export module AlertDialog {
					export class Builder {
						public static class: java.lang.Class<android.support.v7.app.AlertDialog.Builder>;
						public setIcon(param0: android.graphics.drawable.Drawable): android.support.v7.app.AlertDialog.Builder;
						public setPositiveButton(param0: string, param1: android.content.DialogInterface.OnClickListener): android.support.v7.app.AlertDialog.Builder;
						public setNeutralButton(param0: number, param1: android.content.DialogInterface.OnClickListener): android.support.v7.app.AlertDialog.Builder;
						public create(): android.support.v7.app.AlertDialog;
						public setCustomTitle(param0: android.view.View): android.support.v7.app.AlertDialog.Builder;
						public setView(param0: number): android.support.v7.app.AlertDialog.Builder;
						public setItems(param0: number, param1: android.content.DialogInterface.OnClickListener): android.support.v7.app.AlertDialog.Builder;
						public setNegativeButtonIcon(param0: android.graphics.drawable.Drawable): android.support.v7.app.AlertDialog.Builder;
						public setPositiveButton(param0: number, param1: android.content.DialogInterface.OnClickListener): android.support.v7.app.AlertDialog.Builder;
						public setNegativeButton(param0: string, param1: android.content.DialogInterface.OnClickListener): android.support.v7.app.AlertDialog.Builder;
						public constructor(param0: android.content.Context);
						/** @deprecated */
						public setInverseBackgroundForced(param0: boolean): android.support.v7.app.AlertDialog.Builder;
						public setOnDismissListener(param0: android.content.DialogInterface.OnDismissListener): android.support.v7.app.AlertDialog.Builder;
						/** @deprecated */
						public setView(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): android.support.v7.app.AlertDialog.Builder;
						public setCursor(param0: android.database.Cursor, param1: android.content.DialogInterface.OnClickListener, param2: string): android.support.v7.app.AlertDialog.Builder;
						public setMultiChoiceItems(param0: androidNative.Array<string>, param1: androidNative.Array<boolean>, param2: android.content.DialogInterface.OnMultiChoiceClickListener): android.support.v7.app.AlertDialog.Builder;
						public setSingleChoiceItems(param0: android.database.Cursor, param1: number, param2: string, param3: android.content.DialogInterface.OnClickListener): android.support.v7.app.AlertDialog.Builder;
						public setItems(param0: androidNative.Array<string>, param1: android.content.DialogInterface.OnClickListener): android.support.v7.app.AlertDialog.Builder;
						public setTitle(param0: number): android.support.v7.app.AlertDialog.Builder;
						public setMessage(param0: number): android.support.v7.app.AlertDialog.Builder;
						public setSingleChoiceItems(param0: android.widget.ListAdapter, param1: number, param2: android.content.DialogInterface.OnClickListener): android.support.v7.app.AlertDialog.Builder;
						public setNeutralButton(param0: string, param1: android.content.DialogInterface.OnClickListener): android.support.v7.app.AlertDialog.Builder;
						public setIcon(param0: number): android.support.v7.app.AlertDialog.Builder;
						public constructor(param0: android.content.Context, param1: number);
						public setOnItemSelectedListener(param0: android.widget.AdapterView.OnItemSelectedListener): android.support.v7.app.AlertDialog.Builder;
						public setNeutralButtonIcon(param0: android.graphics.drawable.Drawable): android.support.v7.app.AlertDialog.Builder;
						public setCancelable(param0: boolean): android.support.v7.app.AlertDialog.Builder;
						public setView(param0: android.view.View): android.support.v7.app.AlertDialog.Builder;
						public setSingleChoiceItems(param0: androidNative.Array<string>, param1: number, param2: android.content.DialogInterface.OnClickListener): android.support.v7.app.AlertDialog.Builder;
						public setAdapter(param0: android.widget.ListAdapter, param1: android.content.DialogInterface.OnClickListener): android.support.v7.app.AlertDialog.Builder;
						public setMultiChoiceItems(param0: android.database.Cursor, param1: string, param2: string, param3: android.content.DialogInterface.OnMultiChoiceClickListener): android.support.v7.app.AlertDialog.Builder;
						public setNegativeButton(param0: number, param1: android.content.DialogInterface.OnClickListener): android.support.v7.app.AlertDialog.Builder;
						public getContext(): android.content.Context;
						public setOnKeyListener(param0: android.content.DialogInterface.OnKeyListener): android.support.v7.app.AlertDialog.Builder;
						public show(): android.support.v7.app.AlertDialog;
						public setMultiChoiceItems(param0: number, param1: androidNative.Array<boolean>, param2: android.content.DialogInterface.OnMultiChoiceClickListener): android.support.v7.app.AlertDialog.Builder;
						public setOnCancelListener(param0: android.content.DialogInterface.OnCancelListener): android.support.v7.app.AlertDialog.Builder;
						public setTitle(param0: string): android.support.v7.app.AlertDialog.Builder;
						public setRecycleOnMeasureEnabled(param0: boolean): android.support.v7.app.AlertDialog.Builder;
						public setMessage(param0: string): android.support.v7.app.AlertDialog.Builder;
						public setPositiveButtonIcon(param0: android.graphics.drawable.Drawable): android.support.v7.app.AlertDialog.Builder;
						public setIconAttribute(param0: number): android.support.v7.app.AlertDialog.Builder;
						public setSingleChoiceItems(param0: number, param1: number, param2: android.content.DialogInterface.OnClickListener): android.support.v7.app.AlertDialog.Builder;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class AppCompatActivity implements android.support.v7.app.AppCompatCallback, android.support.v7.app.ActionBarDrawerToggle.DelegateProvider {
					public static class: java.lang.Class<android.support.v7.app.AppCompatActivity>;
					public onSupportActionModeFinished(param0: android.support.v7.view.ActionMode): void;
					public onSupportNavigateUp(): boolean;
					/** @deprecated */
					public setSupportProgressBarVisibility(param0: boolean): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public supportNavigateUpTo(param0: android.content.Intent): void;
					public getSupportActionBar(): android.support.v7.app.ActionBar;
					public invalidateOptionsMenu(): void;
					public onDestroy(): void;
					public supportRequestWindowFeature(param0: number): boolean;
					public startSupportActionMode(param0: android.support.v7.view.ActionMode.Callback): android.support.v7.view.ActionMode;
					public getMenuInflater(): android.view.MenuInflater;
					/** @deprecated */
					public setSupportProgress(param0: number): void;
					public supportInvalidateOptionsMenu(): void;
					public onCreateSupportNavigateUpTaskStack(param0: android.support.v4.app.TaskStackBuilder): void;
					public onStart(): void;
					public setSupportActionBar(param0: android.support.v7.widget.Toolbar): void;
					public getDelegate(): android.support.v7.app.AppCompatDelegate;
					public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
					public getDrawerToggleDelegate(): android.support.v7.app.ActionBarDrawerToggle.Delegate;
					public constructor();
					public onCreate(param0: android.os.Bundle): void;
					public getResources(): android.content.res.Resources;
					/** @deprecated */
					public setSupportProgressBarIndeterminateVisibility(param0: boolean): void;
					public openOptionsMenu(): void;
					public onPostResume(): void;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
					public addContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					/** @deprecated */
					public onSupportContentChanged(): void;
					/** @deprecated */
					public setSupportProgressBarIndeterminate(param0: boolean): void;
					public setContentView(param0: number): void;
					public findViewById(param0: number): android.view.View;
					public onPrepareSupportNavigateUpTaskStack(param0: android.support.v4.app.TaskStackBuilder): void;
					public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;
					public onWindowStartingSupportActionMode(param0: android.support.v7.view.ActionMode.Callback): android.support.v7.view.ActionMode;
					public onTitleChanged(param0: string, param1: number): void;
					public onSupportActionModeStarted(param0: android.support.v7.view.ActionMode): void;
					public onMenuOpened(param0: number, param1: android.view.Menu): boolean;
					public supportShouldUpRecreateTask(param0: android.content.Intent): boolean;
					public getSupportParentActivityIntent(): android.content.Intent;
					public onPostCreate(param0: android.os.Bundle): void;
					public onSaveInstanceState(param0: android.os.Bundle): void;
					public setContentView(param0: android.view.View): void;
					public onPanelClosed(param0: number, param1: android.view.Menu): void;
					public closeOptionsMenu(): void;
					public setTheme(param0: number): void;
					public onStop(): void;
					public setContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public onContentChanged(): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class AppCompatCallback {
					public static class: java.lang.Class<android.support.v7.app.AppCompatCallback>;
					/**
					 * Constructs a new instance of the android.support.v7.app.AppCompatCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onSupportActionModeStarted(param0: android.support.v7.view.ActionMode): void; onSupportActionModeFinished(param0: android.support.v7.view.ActionMode): void; onWindowStartingSupportActionMode(param0: android.support.v7.view.ActionMode.Callback): android.support.v7.view.ActionMode });
					public constructor();
					public onSupportActionModeFinished(param0: android.support.v7.view.ActionMode): void;
					public onWindowStartingSupportActionMode(param0: android.support.v7.view.ActionMode.Callback): android.support.v7.view.ActionMode;
					public onSupportActionModeStarted(param0: android.support.v7.view.ActionMode): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module app {
				export abstract class AppCompatDelegate {
					public static class: java.lang.Class<android.support.v7.app.AppCompatDelegate>;
					public static MODE_NIGHT_NO: number;
					public static MODE_NIGHT_YES: number;
					public static MODE_NIGHT_AUTO: number;
					public static MODE_NIGHT_FOLLOW_SYSTEM: number;
					public static FEATURE_SUPPORT_ACTION_BAR: number;
					public static FEATURE_SUPPORT_ACTION_BAR_OVERLAY: number;
					public static FEATURE_ACTION_MODE_OVERLAY: number;
					public requestWindowFeature(param0: number): boolean;
					public getSupportActionBar(): android.support.v7.app.ActionBar;
					public setTitle(param0: string): void;
					public invalidateOptionsMenu(): void;
					public onDestroy(): void;
					public startSupportActionMode(param0: android.support.v7.view.ActionMode.Callback): android.support.v7.view.ActionMode;
					public getMenuInflater(): android.view.MenuInflater;
					public onStart(): void;
					public setSupportActionBar(param0: android.support.v7.widget.Toolbar): void;
					public getDrawerToggleDelegate(): android.support.v7.app.ActionBarDrawerToggle.Delegate;
					public onCreate(param0: android.os.Bundle): void;
					public applyDayNight(): boolean;
					public static setDefaultNightMode(param0: number): void;
					public onPostResume(): void;
					public static isCompatVectorFromResourcesEnabled(): boolean;
					public createView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
					public installViewFactory(): void;
					public addContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public setContentView(param0: number): void;
					public static create(param0: android.app.Dialog, param1: android.support.v7.app.AppCompatCallback): android.support.v7.app.AppCompatDelegate;
					public findViewById(param0: number): android.view.View;
					public static create(param0: android.app.Activity, param1: android.support.v7.app.AppCompatCallback): android.support.v7.app.AppCompatDelegate;
					public static getDefaultNightMode(): number;
					public hasWindowFeature(param0: number): boolean;
					public setHandleNativeActionModesEnabled(param0: boolean): void;
					public isHandleNativeActionModesEnabled(): boolean;
					public static create(param0: android.content.Context, param1: android.view.Window, param2: android.support.v7.app.AppCompatCallback): android.support.v7.app.AppCompatDelegate;
					public onPostCreate(param0: android.os.Bundle): void;
					public onSaveInstanceState(param0: android.os.Bundle): void;
					public setContentView(param0: android.view.View): void;
					public onStop(): void;
					public setContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public static setCompatVectorFromResourcesEnabled(param0: boolean): void;
					public setLocalNightMode(param0: number): void;
				}
				export module AppCompatDelegate {
					export class NightMode {
						public static class: java.lang.Class<android.support.v7.app.AppCompatDelegate.NightMode>;
						/**
						 * Constructs a new instance of the android.support.v7.app.AppCompatDelegate$NightMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {});
						public constructor();
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class AppCompatDelegateImpl extends android.support.v7.app.AppCompatDelegate implements android.support.v7.view.menu.MenuBuilder.Callback {
					public static class: java.lang.Class<android.support.v7.app.AppCompatDelegateImpl>;
					public requestWindowFeature(param0: number): boolean;
					public getSupportActionBar(): android.support.v7.app.ActionBar;
					public setTitle(param0: string): void;
					public invalidateOptionsMenu(): void;
					public onDestroy(): void;
					public onMenuModeChange(param0: android.support.v7.view.menu.MenuBuilder): void;
					public startSupportActionMode(param0: android.support.v7.view.ActionMode.Callback): android.support.v7.view.ActionMode;
					public getMenuInflater(): android.view.MenuInflater;
					public onStart(): void;
					public setSupportActionBar(param0: android.support.v7.widget.Toolbar): void;
					public getDrawerToggleDelegate(): android.support.v7.app.ActionBarDrawerToggle.Delegate;
					public onCreate(param0: android.os.Bundle): void;
					public applyDayNight(): boolean;
					public onPostResume(): void;
					public onMenuItemSelected(param0: android.support.v7.view.menu.MenuBuilder, param1: android.view.MenuItem): boolean;
					public createView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
					public installViewFactory(): void;
					public addContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public getPanelState(param0: number, param1: boolean): android.support.v7.app.AppCompatDelegateImpl.PanelFeatureState;
					public setContentView(param0: number): void;
					public findViewById(param0: number): android.view.View;
					public onCreateView(param0: string, param1: android.content.Context, param2: android.util.AttributeSet): android.view.View;
					public hasWindowFeature(param0: number): boolean;
					public setHandleNativeActionModesEnabled(param0: boolean): void;
					public isHandleNativeActionModesEnabled(): boolean;
					public onCreateView(param0: android.view.View, param1: string, param2: android.content.Context, param3: android.util.AttributeSet): android.view.View;
					public onPostCreate(param0: android.os.Bundle): void;
					public onSaveInstanceState(param0: android.os.Bundle): void;
					public setContentView(param0: android.view.View): void;
					public onStop(): void;
					public setContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public setLocalNightMode(param0: number): void;
				}
				export module AppCompatDelegateImpl {
					export class ActionBarDrawableToggleImpl extends android.support.v7.app.ActionBarDrawerToggle.Delegate {
						public static class: java.lang.Class<android.support.v7.app.AppCompatDelegateImpl.ActionBarDrawableToggleImpl>;
						public isNavigationVisible(): boolean;
						public getThemeUpIndicator(): android.graphics.drawable.Drawable;
						public getActionBarThemedContext(): android.content.Context;
						public setActionBarDescription(param0: number): void;
						public setActionBarUpIndicator(param0: android.graphics.drawable.Drawable, param1: number): void;
					}
					export class ActionMenuPresenterCallback extends android.support.v7.view.menu.MenuPresenter.Callback {
						public static class: java.lang.Class<android.support.v7.app.AppCompatDelegateImpl.ActionMenuPresenterCallback>;
						public onCloseMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: boolean): void;
						public onOpenSubMenu(param0: android.support.v7.view.menu.MenuBuilder): boolean;
					}
					export class ActionModeCallbackWrapperV9 extends android.support.v7.view.ActionMode.Callback {
						public static class: java.lang.Class<android.support.v7.app.AppCompatDelegateImpl.ActionModeCallbackWrapperV9>;
						public onPrepareActionMode(param0: android.support.v7.view.ActionMode, param1: android.view.Menu): boolean;
						public onDestroyActionMode(param0: android.support.v7.view.ActionMode): void;
						public constructor(param0: android.support.v7.app.AppCompatDelegateImpl, param1: android.support.v7.view.ActionMode.Callback);
						public onActionItemClicked(param0: android.support.v7.view.ActionMode, param1: android.view.MenuItem): boolean;
						public onCreateActionMode(param0: android.support.v7.view.ActionMode, param1: android.view.Menu): boolean;
					}
					export class AppCompatWindowCallback extends android.support.v7.view.WindowCallbackWrapper {
						public static class: java.lang.Class<android.support.v7.app.AppCompatDelegateImpl.AppCompatWindowCallback>;
						public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;
						public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;
						public onContentChanged(): void;
						public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;
						public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;
						public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;
						public onPanelClosed(param0: number, param1: android.view.Menu): void;
						public onProvideKeyboardShortcuts(param0: java.util.List<any>, param1: android.view.Menu, param2: number): void;
						public onMenuOpened(param0: number, param1: android.view.Menu): boolean;
						public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
					}
					export class AutoNightModeManager {
						public static class: java.lang.Class<android.support.v7.app.AppCompatDelegateImpl.AutoNightModeManager>;
					}
					export class ListMenuDecorView extends android.support.v7.widget.ContentFrameLayout {
						public static class: java.lang.Class<android.support.v7.app.AppCompatDelegateImpl.ListMenuDecorView>;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public constructor(param0: android.support.v7.app.AppCompatDelegateImpl, param1: android.content.Context);
						public setBackgroundResource(param0: number): void;
						public onInterceptTouchEvent(param0: android.view.MotionEvent): boolean;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public constructor(param0: android.content.Context);
						public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
					}
					export class PanelFeatureState {
						public static class: java.lang.Class<android.support.v7.app.AppCompatDelegateImpl.PanelFeatureState>;
						public qwertyMode: boolean;
						public hasPanelItems(): boolean;
						public clearMenuPresenters(): void;
					}
					export module PanelFeatureState {
						export class SavedState {
							public static class: java.lang.Class<android.support.v7.app.AppCompatDelegateImpl.PanelFeatureState.SavedState>;
							public static CREATOR: android.os.Parcelable.Creator<android.support.v7.app.AppCompatDelegateImpl.PanelFeatureState.SavedState>;
							public describeContents(): number;
							public writeToParcel(param0: android.os.Parcel, param1: number): void;
						}
					}
					export class PanelMenuPresenterCallback extends android.support.v7.view.menu.MenuPresenter.Callback {
						public static class: java.lang.Class<android.support.v7.app.AppCompatDelegateImpl.PanelMenuPresenterCallback>;
						public onCloseMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: boolean): void;
						public onOpenSubMenu(param0: android.support.v7.view.menu.MenuBuilder): boolean;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class AppCompatDialog implements android.support.v7.app.AppCompatCallback {
					public static class: java.lang.Class<android.support.v7.app.AppCompatDialog>;
					public addContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public onSupportActionModeFinished(param0: android.support.v7.view.ActionMode): void;
					public constructor(param0: android.content.Context, param1: number);
					public getSupportActionBar(): android.support.v7.app.ActionBar;
					public setContentView(param0: number): void;
					public setTitle(param0: string): void;
					public findViewById(param0: number): android.view.View;
					public invalidateOptionsMenu(): void;
					public supportRequestWindowFeature(param0: number): boolean;
					public onWindowStartingSupportActionMode(param0: android.support.v7.view.ActionMode.Callback): android.support.v7.view.ActionMode;
					public onSupportActionModeStarted(param0: android.support.v7.view.ActionMode): void;
					public setTitle(param0: number): void;
					public setContentView(param0: android.view.View): void;
					public getDelegate(): android.support.v7.app.AppCompatDelegate;
					public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
					public constructor(param0: android.content.Context);
					public onCreate(param0: android.os.Bundle): void;
					public onStop(): void;
					public constructor(param0: android.content.Context, param1: boolean, param2: android.content.DialogInterface.OnCancelListener);
					public setContentView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class AppCompatDialogFragment {
					public static class: java.lang.Class<android.support.v7.app.AppCompatDialogFragment>;
					public setupDialog(param0: android.app.Dialog, param1: number): void;
					public constructor();
					public onCreateDialog(param0: android.os.Bundle): android.app.Dialog;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class AppCompatViewInflater {
					public static class: java.lang.Class<android.support.v7.app.AppCompatViewInflater>;
					public createSeekBar(param0: android.content.Context, param1: android.util.AttributeSet): android.support.v7.widget.AppCompatSeekBar;
					public createTextView(param0: android.content.Context, param1: android.util.AttributeSet): android.support.v7.widget.AppCompatTextView;
					public createAutoCompleteTextView(param0: android.content.Context, param1: android.util.AttributeSet): android.support.v7.widget.AppCompatAutoCompleteTextView;
					public createMultiAutoCompleteTextView(param0: android.content.Context, param1: android.util.AttributeSet): android.support.v7.widget.AppCompatMultiAutoCompleteTextView;
					public createRatingBar(param0: android.content.Context, param1: android.util.AttributeSet): android.support.v7.widget.AppCompatRatingBar;
					public createCheckedTextView(param0: android.content.Context, param1: android.util.AttributeSet): android.support.v7.widget.AppCompatCheckedTextView;
					public createEditText(param0: android.content.Context, param1: android.util.AttributeSet): android.support.v7.widget.AppCompatEditText;
					public createSpinner(param0: android.content.Context, param1: android.util.AttributeSet): android.support.v7.widget.AppCompatSpinner;
					public createCheckBox(param0: android.content.Context, param1: android.util.AttributeSet): android.support.v7.widget.AppCompatCheckBox;
					public createButton(param0: android.content.Context, param1: android.util.AttributeSet): android.support.v7.widget.AppCompatButton;
					public createView(param0: android.content.Context, param1: string, param2: android.util.AttributeSet): android.view.View;
					public createImageButton(param0: android.content.Context, param1: android.util.AttributeSet): android.support.v7.widget.AppCompatImageButton;
					public constructor();
					public createImageView(param0: android.content.Context, param1: android.util.AttributeSet): android.support.v7.widget.AppCompatImageView;
					public createRadioButton(param0: android.content.Context, param1: android.util.AttributeSet): android.support.v7.widget.AppCompatRadioButton;
				}
				export module AppCompatViewInflater {
					export class DeclaredOnClickListener {
						public static class: java.lang.Class<android.support.v7.app.AppCompatViewInflater.DeclaredOnClickListener>;
						public constructor(param0: android.view.View, param1: string);
						public onClick(param0: android.view.View): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class NavItemSelectedListener {
					public static class: java.lang.Class<android.support.v7.app.NavItemSelectedListener>;
					public onNothingSelected(param0: android.widget.AdapterView<any>): void;
					public onItemSelected(param0: android.widget.AdapterView<any>, param1: android.view.View, param2: number, param3: number): void;
					public constructor(param0: android.support.v7.app.ActionBar.OnNavigationListener);
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class ResourcesFlusher {
					public static class: java.lang.Class<android.support.v7.app.ResourcesFlusher>;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class ToolbarActionBar extends android.support.v7.app.ActionBar {
					public static class: java.lang.Class<android.support.v7.app.ToolbarActionBar>;
					public setLogo(param0: number): void;
					public getTitle(): string;
					public invalidateOptionsMenu(): boolean;
					public isShowing(): boolean;
					public getElevation(): number;
					public getNavigationMode(): number;
					public getTabAt(param0: number): android.support.v7.app.ActionBar.Tab;
					public getNavigationItemCount(): number;
					public setTitle(param0: string): void;
					public addTab(param0: android.support.v7.app.ActionBar.Tab, param1: number, param2: boolean): void;
					public removeTab(param0: android.support.v7.app.ActionBar.Tab): void;
					public addTab(param0: android.support.v7.app.ActionBar.Tab): void;
					public addOnMenuVisibilityListener(param0: android.support.v7.app.ActionBar.OnMenuVisibilityListener): void;
					/** @deprecated */
					public removeTab(param0: android.support.v7.app.ActionBar.Tab): void;
					/** @deprecated */
					public getSelectedNavigationIndex(): number;
					public setDisplayShowCustomEnabled(param0: boolean): void;
					/** @deprecated */
					public setNavigationMode(param0: number): void;
					public setDefaultDisplayHomeAsUpEnabled(param0: boolean): void;
					public getCustomView(): android.view.View;
					/** @deprecated */
					public removeAllTabs(): void;
					public removeOnMenuVisibilityListener(param0: android.support.v7.app.ActionBar.OnMenuVisibilityListener): void;
					public setSelectedNavigationItem(param0: number): void;
					public setDisplayShowHomeEnabled(param0: boolean): void;
					public onMenuKeyEvent(param0: android.view.KeyEvent): boolean;
					public setIcon(param0: android.graphics.drawable.Drawable): void;
					/** @deprecated */
					public addTab(param0: android.support.v7.app.ActionBar.Tab, param1: number): void;
					public addTab(param0: android.support.v7.app.ActionBar.Tab, param1: number): void;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
					/** @deprecated */
					public getTabCount(): number;
					public setSplitBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					/** @deprecated */
					public addTab(param0: android.support.v7.app.ActionBar.Tab, param1: number, param2: boolean): void;
					public show(): void;
					/** @deprecated */
					public addTab(param0: android.support.v7.app.ActionBar.Tab): void;
					public setDisplayOptions(param0: number, param1: number): void;
					public getHeight(): number;
					public addTab(param0: android.support.v7.app.ActionBar.Tab, param1: boolean): void;
					public setStackedBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					public setDisplayOptions(param0: number): void;
					public isTitleTruncated(): boolean;
					/** @deprecated */
					public removeTabAt(param0: number): void;
					public setTitle(param0: number): void;
					public setLogo(param0: android.graphics.drawable.Drawable): void;
					public newTab(): android.support.v7.app.ActionBar.Tab;
					public setIcon(param0: number): void;
					public closeOptionsMenu(): boolean;
					/** @deprecated */
					public getNavigationMode(): number;
					public collapseActionView(): boolean;
					/** @deprecated */
					public getSelectedTab(): android.support.v7.app.ActionBar.Tab;
					public setCustomView(param0: android.view.View): void;
					public hide(): void;
					public setDisplayUseLogoEnabled(param0: boolean): void;
					public setDisplayShowTitleEnabled(param0: boolean): void;
					/** @deprecated */
					public selectTab(param0: android.support.v7.app.ActionBar.Tab): void;
					public onKeyShortcut(param0: number, param1: android.view.KeyEvent): boolean;
					public setCustomView(param0: number): void;
					public setShowHideAnimationEnabled(param0: boolean): void;
					public setListNavigationCallbacks(param0: android.widget.SpinnerAdapter, param1: android.support.v7.app.ActionBar.OnNavigationListener): void;
					public getTabCount(): number;
					public setElevation(param0: number): void;
					public setHomeActionContentDescription(param0: string): void;
					public requestFocus(): boolean;
					public getWrappedWindowCallback(): android.view.Window.Callback;
					public setSubtitle(param0: number): void;
					/** @deprecated */
					public setListNavigationCallbacks(param0: android.widget.SpinnerAdapter, param1: android.support.v7.app.ActionBar.OnNavigationListener): void;
					/** @deprecated */
					public getNavigationItemCount(): number;
					public dispatchMenuVisibilityChanged(param0: boolean): void;
					public setCustomView(param0: android.view.View, param1: android.support.v7.app.ActionBar.LayoutParams): void;
					public setHomeActionContentDescription(param0: number): void;
					/** @deprecated */
					public setSelectedNavigationItem(param0: number): void;
					public getSelectedTab(): android.support.v7.app.ActionBar.Tab;
					/** @deprecated */
					public getTabAt(param0: number): android.support.v7.app.ActionBar.Tab;
					public getThemedContext(): android.content.Context;
					public setHomeAsUpIndicator(param0: android.graphics.drawable.Drawable): void;
					public getSelectedNavigationIndex(): number;
					public setNavigationMode(param0: number): void;
					public setDisplayHomeAsUpEnabled(param0: boolean): void;
					public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					public removeTabAt(param0: number): void;
					/** @deprecated */
					public newTab(): android.support.v7.app.ActionBar.Tab;
					public openOptionsMenu(): boolean;
					public setSubtitle(param0: string): void;
					public removeAllTabs(): void;
					public getSubtitle(): string;
					public getDisplayOptions(): number;
					/** @deprecated */
					public addTab(param0: android.support.v7.app.ActionBar.Tab, param1: boolean): void;
					public setHomeButtonEnabled(param0: boolean): void;
					public selectTab(param0: android.support.v7.app.ActionBar.Tab): void;
					public setWindowTitle(param0: string): void;
					public setHomeAsUpIndicator(param0: number): void;
				}
				export module ToolbarActionBar {
					export class ActionMenuPresenterCallback extends android.support.v7.view.menu.MenuPresenter.Callback {
						public static class: java.lang.Class<android.support.v7.app.ToolbarActionBar.ActionMenuPresenterCallback>;
						public onCloseMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: boolean): void;
						public onOpenSubMenu(param0: android.support.v7.view.menu.MenuBuilder): boolean;
					}
					export class MenuBuilderCallback extends android.support.v7.view.menu.MenuBuilder.Callback {
						public static class: java.lang.Class<android.support.v7.app.ToolbarActionBar.MenuBuilderCallback>;
						public onMenuItemSelected(param0: android.support.v7.view.menu.MenuBuilder, param1: android.view.MenuItem): boolean;
						public onMenuModeChange(param0: android.support.v7.view.menu.MenuBuilder): void;
					}
					export class ToolbarCallbackWrapper extends android.support.v7.view.WindowCallbackWrapper {
						public static class: java.lang.Class<android.support.v7.app.ToolbarActionBar.ToolbarCallbackWrapper>;
						public onCreatePanelView(param0: number): android.view.View;
						public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;
						public constructor(param0: android.view.Window.Callback);
						public constructor(param0: android.support.v7.app.ToolbarActionBar, param1: android.view.Window.Callback);
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class TwilightCalculator {
					public static class: java.lang.Class<android.support.v7.app.TwilightCalculator>;
					public static DAY: number;
					public static NIGHT: number;
					public sunset: number;
					public sunrise: number;
					public state: number;
					public calculateTwilight(param0: number, param1: number, param2: number): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class TwilightManager {
					public static class: java.lang.Class<android.support.v7.app.TwilightManager>;
				}
				export module TwilightManager {
					export class TwilightState {
						public static class: java.lang.Class<android.support.v7.app.TwilightManager.TwilightState>;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module app {
				export class WindowDecorActionBar extends android.support.v7.app.ActionBar implements android.support.v7.widget.ActionBarOverlayLayout.ActionBarVisibilityCallback {
					public static class: java.lang.Class<android.support.v7.app.WindowDecorActionBar>;
					public getTitle(): string;
					public isShowing(): boolean;
					public getElevation(): number;
					public addTab(param0: android.support.v7.app.ActionBar.Tab, param1: number, param2: boolean): void;
					public removeTab(param0: android.support.v7.app.ActionBar.Tab): void;
					public getNavigationItemCount(): number;
					public addOnMenuVisibilityListener(param0: android.support.v7.app.ActionBar.OnMenuVisibilityListener): void;
					public addTab(param0: android.support.v7.app.ActionBar.Tab): void;
					/** @deprecated */
					public removeTab(param0: android.support.v7.app.ActionBar.Tab): void;
					public showForSystem(): void;
					/** @deprecated */
					public setNavigationMode(param0: number): void;
					public getCustomView(): android.view.View;
					public setSelectedNavigationItem(param0: number): void;
					public constructor();
					public addTab(param0: android.support.v7.app.ActionBar.Tab, param1: number): void;
					public hideForSystem(): void;
					public setIcon(param0: android.graphics.drawable.Drawable): void;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
					public startActionMode(param0: android.support.v7.view.ActionMode.Callback): android.support.v7.view.ActionMode;
					public setSplitBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					/** @deprecated */
					public addTab(param0: android.support.v7.app.ActionBar.Tab, param1: number, param2: boolean): void;
					public getHeight(): number;
					public addTab(param0: android.support.v7.app.ActionBar.Tab, param1: boolean): void;
					public setDisplayOptions(param0: number): void;
					public setStackedBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					/** @deprecated */
					public removeTabAt(param0: number): void;
					public setTitle(param0: number): void;
					public setLogo(param0: android.graphics.drawable.Drawable): void;
					public onWindowVisibilityChanged(param0: number): void;
					/** @deprecated */
					public getNavigationMode(): number;
					public collapseActionView(): boolean;
					/** @deprecated */
					public getSelectedTab(): android.support.v7.app.ActionBar.Tab;
					public setCustomView(param0: android.view.View): void;
					public setDisplayShowTitleEnabled(param0: boolean): void;
					public onKeyShortcut(param0: number, param1: android.view.KeyEvent): boolean;
					public setShowHideAnimationEnabled(param0: boolean): void;
					public setListNavigationCallbacks(param0: android.widget.SpinnerAdapter, param1: android.support.v7.app.ActionBar.OnNavigationListener): void;
					public getTabCount(): number;
					public setElevation(param0: number): void;
					public requestFocus(): boolean;
					public setHomeActionContentDescription(param0: string): void;
					public doHide(param0: boolean): void;
					/** @deprecated */
					public setListNavigationCallbacks(param0: android.widget.SpinnerAdapter, param1: android.support.v7.app.ActionBar.OnNavigationListener): void;
					/** @deprecated */
					public getNavigationItemCount(): number;
					public dispatchMenuVisibilityChanged(param0: boolean): void;
					public setCustomView(param0: android.view.View, param1: android.support.v7.app.ActionBar.LayoutParams): void;
					public setHomeActionContentDescription(param0: number): void;
					public getSelectedTab(): android.support.v7.app.ActionBar.Tab;
					public setHomeAsUpIndicator(param0: android.graphics.drawable.Drawable): void;
					public getSelectedNavigationIndex(): number;
					public setNavigationMode(param0: number): void;
					public removeTabAt(param0: number): void;
					public doShow(param0: boolean): void;
					/** @deprecated */
					public newTab(): android.support.v7.app.ActionBar.Tab;
					public removeAllTabs(): void;
					public getSubtitle(): string;
					/** @deprecated */
					public addTab(param0: android.support.v7.app.ActionBar.Tab, param1: boolean): void;
					public setHomeButtonEnabled(param0: boolean): void;
					public selectTab(param0: android.support.v7.app.ActionBar.Tab): void;
					public setWindowTitle(param0: string): void;
					public setLogo(param0: number): void;
					public getNavigationMode(): number;
					public getTabAt(param0: number): android.support.v7.app.ActionBar.Tab;
					public setTitle(param0: string): void;
					public setDisplayShowCustomEnabled(param0: boolean): void;
					/** @deprecated */
					public getSelectedNavigationIndex(): number;
					public setDefaultDisplayHomeAsUpEnabled(param0: boolean): void;
					public removeOnMenuVisibilityListener(param0: android.support.v7.app.ActionBar.OnMenuVisibilityListener): void;
					/** @deprecated */
					public removeAllTabs(): void;
					public isHideOnContentScrollEnabled(): boolean;
					public setDisplayShowHomeEnabled(param0: boolean): void;
					public enableContentAnimations(param0: boolean): void;
					public onContentScrollStarted(): void;
					public onContentScrollStopped(): void;
					/** @deprecated */
					public addTab(param0: android.support.v7.app.ActionBar.Tab, param1: number): void;
					/** @deprecated */
					public getTabCount(): number;
					public setHideOnContentScrollEnabled(param0: boolean): void;
					public show(): void;
					/** @deprecated */
					public addTab(param0: android.support.v7.app.ActionBar.Tab): void;
					public setDisplayOptions(param0: number, param1: number): void;
					public hasLogo(): boolean;
					public isTitleTruncated(): boolean;
					public newTab(): android.support.v7.app.ActionBar.Tab;
					public constructor(param0: android.app.Dialog);
					public setIcon(param0: number): void;
					public animateToMode(param0: boolean): void;
					public hide(): void;
					public setHideOffset(param0: number): void;
					public setDisplayUseLogoEnabled(param0: boolean): void;
					/** @deprecated */
					public selectTab(param0: android.support.v7.app.ActionBar.Tab): void;
					public setCustomView(param0: number): void;
					public setSubtitle(param0: number): void;
					public constructor(param0: android.view.View);
					/** @deprecated */
					public setSelectedNavigationItem(param0: number): void;
					/** @deprecated */
					public getTabAt(param0: number): android.support.v7.app.ActionBar.Tab;
					public getThemedContext(): android.content.Context;
					public setDisplayHomeAsUpEnabled(param0: boolean): void;
					public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					public setSubtitle(param0: string): void;
					public getDisplayOptions(): number;
					public constructor(param0: android.app.Activity, param1: boolean);
					public getHideOffset(): number;
					public hasIcon(): boolean;
					public setHomeAsUpIndicator(param0: number): void;
				}
				export module WindowDecorActionBar {
					export class ActionModeImpl extends android.support.v7.view.ActionMode implements android.support.v7.view.menu.MenuBuilder.Callback {
						public static class: java.lang.Class<android.support.v7.app.WindowDecorActionBar.ActionModeImpl>;
						public onCloseMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: boolean): void;
						public constructor();
						public finish(): void;
						public isTitleOptional(): boolean;
						public setCustomView(param0: android.view.View): void;
						public onSubMenuSelected(param0: android.support.v7.view.menu.SubMenuBuilder): boolean;
						public onMenuModeChange(param0: android.support.v7.view.menu.MenuBuilder): void;
						public getTitle(): string;
						public setTitle(param0: string): void;
						public invalidate(): void;
						public setSubtitle(param0: string): void;
						public constructor(param0: android.support.v7.app.WindowDecorActionBar, param1: android.content.Context, param2: android.support.v7.view.ActionMode.Callback);
						public getMenuInflater(): android.view.MenuInflater;
						public setTitle(param0: number): void;
						public getMenu(): android.view.Menu;
						public getCustomView(): android.view.View;
						public setSubtitle(param0: number): void;
						public setTitleOptionalHint(param0: boolean): void;
						public dispatchOnCreate(): boolean;
						public onMenuItemSelected(param0: android.support.v7.view.menu.MenuBuilder, param1: android.view.MenuItem): boolean;
						public onCloseSubMenu(param0: android.support.v7.view.menu.SubMenuBuilder): void;
						public getSubtitle(): string;
					}
					export class TabImpl extends android.support.v7.app.ActionBar.Tab {
						public static class: java.lang.Class<android.support.v7.app.WindowDecorActionBar.TabImpl>;
						public setTag(param0: any): android.support.v7.app.ActionBar.Tab;
						public constructor();
						public getPosition(): number;
						public setIcon(param0: android.graphics.drawable.Drawable): android.support.v7.app.ActionBar.Tab;
						public setCustomView(param0: number): android.support.v7.app.ActionBar.Tab;
						public getCallback(): android.support.v7.app.ActionBar.TabListener;
						public setTabListener(param0: android.support.v7.app.ActionBar.TabListener): android.support.v7.app.ActionBar.Tab;
						public constructor(param0: android.support.v7.app.WindowDecorActionBar);
						public getText(): string;
						public setContentDescription(param0: number): android.support.v7.app.ActionBar.Tab;
						public setText(param0: string): android.support.v7.app.ActionBar.Tab;
						public getTag(): any;
						public setIcon(param0: number): android.support.v7.app.ActionBar.Tab;
						public setText(param0: number): android.support.v7.app.ActionBar.Tab;
						public getCustomView(): android.view.View;
						public setPosition(param0: number): void;
						public setCustomView(param0: android.view.View): android.support.v7.app.ActionBar.Tab;
						public getIcon(): android.graphics.drawable.Drawable;
						public select(): void;
						public getContentDescription(): string;
						public setContentDescription(param0: string): android.support.v7.app.ActionBar.Tab;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module content {
				export module res {
					export class AppCompatResources {
						public static class: java.lang.Class<android.support.v7.content.res.AppCompatResources>;
						public static getDrawable(param0: android.content.Context, param1: number): android.graphics.drawable.Drawable;
						public static getColorStateList(param0: android.content.Context, param1: number): android.content.res.ColorStateList;
					}
					export module AppCompatResources {
						export class ColorStateListCacheEntry {
							public static class: java.lang.Class<android.support.v7.content.res.AppCompatResources.ColorStateListCacheEntry>;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module graphics {
				export module drawable {
					export class AnimatedStateListDrawableCompat extends android.support.v7.graphics.drawable.StateListDrawable {
						public static class: java.lang.Class<android.support.v7.graphics.drawable.AnimatedStateListDrawableCompat>;
						public constructor();
						public addTransition(param0: number, param1: number, param2: android.graphics.drawable.Drawable, param3: boolean): void;
						public inflate(param0: android.content.Context, param1: android.content.res.Resources, param2: org.xmlpull.v1.XmlPullParser, param3: android.util.AttributeSet, param4: android.content.res.Resources.Theme): void;
						public addState(param0: androidNative.Array<number>, param1: android.graphics.drawable.Drawable): void;
						public mutate(): android.graphics.drawable.Drawable;
						public onStateChange(param0: androidNative.Array<number>): boolean;
						public jumpToCurrentState(): void;
						public setConstantState(param0: android.support.v7.graphics.drawable.DrawableContainer.DrawableContainerState): void;
						public isStateful(): boolean;
						public setVisible(param0: boolean, param1: boolean): boolean;
						public addState(param0: androidNative.Array<number>, param1: android.graphics.drawable.Drawable, param2: number): void;
						public static create(param0: android.content.Context, param1: number, param2: android.content.res.Resources.Theme): android.support.v7.graphics.drawable.AnimatedStateListDrawableCompat;
						public static createFromXmlInner(param0: android.content.Context, param1: android.content.res.Resources, param2: org.xmlpull.v1.XmlPullParser, param3: android.util.AttributeSet, param4: android.content.res.Resources.Theme): android.support.v7.graphics.drawable.AnimatedStateListDrawableCompat;
					}
					export module AnimatedStateListDrawableCompat {
						export class AnimatableTransition extends android.support.v7.graphics.drawable.AnimatedStateListDrawableCompat.Transition {
							public static class: java.lang.Class<android.support.v7.graphics.drawable.AnimatedStateListDrawableCompat.AnimatableTransition>;
							public stop(): void;
							public start(): void;
						}
						export class AnimatedStateListState extends android.support.v7.graphics.drawable.StateListDrawable.StateListState {
							public static class: java.lang.Class<android.support.v7.graphics.drawable.AnimatedStateListDrawableCompat.AnimatedStateListState>;
							public newDrawable(): android.graphics.drawable.Drawable;
							public newDrawable(param0: android.content.res.Resources): android.graphics.drawable.Drawable;
						}
						export class AnimatedVectorDrawableTransition extends android.support.v7.graphics.drawable.AnimatedStateListDrawableCompat.Transition {
							public static class: java.lang.Class<android.support.v7.graphics.drawable.AnimatedStateListDrawableCompat.AnimatedVectorDrawableTransition>;
							public stop(): void;
							public start(): void;
						}
						export class AnimationDrawableTransition extends android.support.v7.graphics.drawable.AnimatedStateListDrawableCompat.Transition {
							public static class: java.lang.Class<android.support.v7.graphics.drawable.AnimatedStateListDrawableCompat.AnimationDrawableTransition>;
							public canReverse(): boolean;
							public stop(): void;
							public start(): void;
							public reverse(): void;
						}
						export class FrameInterpolator {
							public static class: java.lang.Class<android.support.v7.graphics.drawable.AnimatedStateListDrawableCompat.FrameInterpolator>;
							public getInterpolation(param0: number): number;
						}
						export abstract class Transition {
							public static class: java.lang.Class<android.support.v7.graphics.drawable.AnimatedStateListDrawableCompat.Transition>;
							public canReverse(): boolean;
							public stop(): void;
							public start(): void;
							public reverse(): void;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module graphics {
				export module drawable {
					export class DrawableContainer {
						public static class: java.lang.Class<android.support.v7.graphics.drawable.DrawableContainer>;
						public getChangingConfigurations(): number;
						public setColorFilter(param0: android.graphics.ColorFilter): void;
						public onLevelChange(param0: number): boolean;
						public getPadding(param0: android.graphics.Rect): boolean;
						public setTintList(param0: android.content.res.ColorStateList): void;
						public getMinimumWidth(): number;
						public getOutline(param0: any): void;
						public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public onLayoutDirectionChanged(param0: number): boolean;
						public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
						public getConstantState(): android.graphics.drawable.Drawable.ConstantState;
						public getAlpha(): number;
						public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public setAutoMirrored(param0: boolean): void;
						public setConstantState(param0: android.support.v7.graphics.drawable.DrawableContainer.DrawableContainerState): void;
						public isStateful(): boolean;
						public setVisible(param0: boolean, param1: boolean): boolean;
						public onBoundsChange(param0: android.graphics.Rect): void;
						public setEnterFadeDuration(param0: number): void;
						public canApplyTheme(): boolean;
						public isAutoMirrored(): boolean;
						public getCurrent(): android.graphics.drawable.Drawable;
						public draw(param0: android.graphics.Canvas): void;
						public getMinimumHeight(): number;
						public setDither(param0: boolean): void;
						public getIntrinsicWidth(): number;
						public setTintMode(param0: android.graphics.PorterDuff.Mode): void;
						public getIntrinsicHeight(): number;
						public mutate(): android.graphics.drawable.Drawable;
						public setExitFadeDuration(param0: number): void;
						public onStateChange(param0: androidNative.Array<number>): boolean;
						public getOpacity(): number;
						public jumpToCurrentState(): void;
						public setAlpha(param0: number): void;
						public getHotspotBounds(param0: android.graphics.Rect): void;
						public setHotspot(param0: number, param1: number): void;
						public setHotspotBounds(param0: number, param1: number, param2: number, param3: number): void;
						public applyTheme(param0: android.content.res.Resources.Theme): void;
					}
					export module DrawableContainer {
						export class BlockInvalidateCallback {
							public static class: java.lang.Class<android.support.v7.graphics.drawable.DrawableContainer.BlockInvalidateCallback>;
							public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
							public unwrap(): android.graphics.drawable.Drawable.Callback;
							public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
							public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
							public wrap(param0: android.graphics.drawable.Drawable.Callback): android.support.v7.graphics.drawable.DrawableContainer.BlockInvalidateCallback;
						}
						export abstract class DrawableContainerState {
							public static class: java.lang.Class<android.support.v7.graphics.drawable.DrawableContainer.DrawableContainerState>;
							public getConstantHeight(): number;
							public setVariablePadding(param0: boolean): void;
							public getEnterFadeDuration(): number;
							public getConstantMinimumWidth(): number;
							public canApplyTheme(): boolean;
							public canConstantState(): boolean;
							public setExitFadeDuration(param0: number): void;
							public getConstantMinimumHeight(): number;
							public getChangingConfigurations(): number;
							public getConstantPadding(): android.graphics.Rect;
							public getChild(param0: number): android.graphics.drawable.Drawable;
							public isStateful(): boolean;
							public isConstantSize(): boolean;
							public getChildCount(): number;
							public growArray(param0: number, param1: number): void;
							public getConstantWidth(): number;
							public computeConstantSize(): void;
							public getOpacity(): number;
							public addChild(param0: android.graphics.drawable.Drawable): number;
							public setConstantSize(param0: boolean): void;
							public setEnterFadeDuration(param0: number): void;
							public getExitFadeDuration(): number;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module graphics {
				export module drawable {
					export class DrawableWrapper {
						public static class: java.lang.Class<android.support.v7.graphics.drawable.DrawableWrapper>;
						public getChangingConfigurations(): number;
						public setColorFilter(param0: android.graphics.ColorFilter): void;
						public onLevelChange(param0: number): boolean;
						public getPadding(param0: android.graphics.Rect): boolean;
						public setTintList(param0: android.content.res.ColorStateList): void;
						public getMinimumWidth(): number;
						public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
						public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public setAutoMirrored(param0: boolean): void;
						public isStateful(): boolean;
						public setVisible(param0: boolean, param1: boolean): boolean;
						public onBoundsChange(param0: android.graphics.Rect): void;
						public getState(): androidNative.Array<number>;
						public setFilterBitmap(param0: boolean): void;
						public isAutoMirrored(): boolean;
						public getCurrent(): android.graphics.drawable.Drawable;
						public setWrappedDrawable(param0: android.graphics.drawable.Drawable): void;
						public getTransparentRegion(): android.graphics.Region;
						public draw(param0: android.graphics.Canvas): void;
						public getMinimumHeight(): number;
						public setDither(param0: boolean): void;
						public getIntrinsicWidth(): number;
						public getIntrinsicHeight(): number;
						public setTintMode(param0: android.graphics.PorterDuff.Mode): void;
						public getWrappedDrawable(): android.graphics.drawable.Drawable;
						public setTint(param0: number): void;
						public setState(param0: androidNative.Array<number>): boolean;
						public getOpacity(): number;
						public jumpToCurrentState(): void;
						public setAlpha(param0: number): void;
						public setChangingConfigurations(param0: number): void;
						public setHotspot(param0: number, param1: number): void;
						public setHotspotBounds(param0: number, param1: number, param2: number, param3: number): void;
						public constructor(param0: android.graphics.drawable.Drawable);
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module graphics {
				export module drawable {
					export class DrawerArrowDrawable {
						public static class: java.lang.Class<android.support.v7.graphics.drawable.DrawerArrowDrawable>;
						public static ARROW_DIRECTION_LEFT: number;
						public static ARROW_DIRECTION_RIGHT: number;
						public static ARROW_DIRECTION_START: number;
						public static ARROW_DIRECTION_END: number;
						public getColor(): number;
						public setColorFilter(param0: android.graphics.ColorFilter): void;
						public isSpinEnabled(): boolean;
						public getGapSize(): number;
						public getArrowShaftLength(): number;
						public constructor(param0: android.content.Context);
						public setArrowShaftLength(param0: number): void;
						public setSpinEnabled(param0: boolean): void;
						public setProgress(param0: number): void;
						public setArrowHeadLength(param0: number): void;
						public getBarThickness(): number;
						public setBarThickness(param0: number): void;
						public getProgress(): number;
						public getBarLength(): number;
						public draw(param0: android.graphics.Canvas): void;
						public getIntrinsicWidth(): number;
						public getIntrinsicHeight(): number;
						public setDirection(param0: number): void;
						public getArrowHeadLength(): number;
						public setColor(param0: number): void;
						public getOpacity(): number;
						public setAlpha(param0: number): void;
						public setVerticalMirror(param0: boolean): void;
						public setBarLength(param0: number): void;
						public setGapSize(param0: number): void;
						public getDirection(): number;
						public getPaint(): android.graphics.Paint;
					}
					export module DrawerArrowDrawable {
						export class ArrowDirection {
							public static class: java.lang.Class<android.support.v7.graphics.drawable.DrawerArrowDrawable.ArrowDirection>;
							/**
							 * Constructs a new instance of the android.support.v7.graphics.drawable.DrawerArrowDrawable$ArrowDirection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module graphics {
				export module drawable {
					export class StateListDrawable extends android.support.v7.graphics.drawable.DrawableContainer {
						public static class: java.lang.Class<android.support.v7.graphics.drawable.StateListDrawable>;
						public isStateful(): boolean;
						public applyTheme(param0: android.content.res.Resources.Theme): void;
						public inflate(param0: android.content.Context, param1: android.content.res.Resources, param2: org.xmlpull.v1.XmlPullParser, param3: android.util.AttributeSet, param4: android.content.res.Resources.Theme): void;
						public addState(param0: androidNative.Array<number>, param1: android.graphics.drawable.Drawable): void;
						public mutate(): android.graphics.drawable.Drawable;
						public onStateChange(param0: androidNative.Array<number>): boolean;
						public setConstantState(param0: android.support.v7.graphics.drawable.DrawableContainer.DrawableContainerState): void;
					}
					export module StateListDrawable {
						export class StateListState extends android.support.v7.graphics.drawable.DrawableContainer.DrawableContainerState {
							public static class: java.lang.Class<android.support.v7.graphics.drawable.StateListDrawable.StateListState>;
							public growArray(param0: number, param1: number): void;
							public newDrawable(): android.graphics.drawable.Drawable;
							public newDrawable(param0: android.content.res.Resources): android.graphics.drawable.Drawable;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module text {
				export class AllCapsTransformationMethod {
					public static class: java.lang.Class<android.support.v7.text.AllCapsTransformationMethod>;
					public onFocusChanged(param0: android.view.View, param1: string, param2: boolean, param3: number, param4: android.graphics.Rect): void;
					public constructor(param0: android.content.Context);
					public getTransformation(param0: string, param1: android.view.View): string;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export class ActionBarPolicy {
					public static class: java.lang.Class<android.support.v7.view.ActionBarPolicy>;
					public getMaxActionButtons(): number;
					public getEmbeddedMenuWidthLimit(): number;
					public getTabContainerHeight(): number;
					public hasEmbeddedTabs(): boolean;
					public static get(param0: android.content.Context): android.support.v7.view.ActionBarPolicy;
					public enableHomeButtonByDefault(): boolean;
					public showsOverflowMenuButton(): boolean;
					public getStackedTabMaxWidth(): number;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export abstract class ActionMode {
					public static class: java.lang.Class<android.support.v7.view.ActionMode>;
					public getTitle(): string;
					public getTitleOptionalHint(): boolean;
					public getTag(): any;
					public setTitle(param0: string): void;
					public finish(): void;
					public getMenuInflater(): android.view.MenuInflater;
					public setTitle(param0: number): void;
					public setSubtitle(param0: number): void;
					public getCustomView(): android.view.View;
					public getMenu(): android.view.Menu;
					public constructor();
					public setSubtitle(param0: string): void;
					public isTitleOptional(): boolean;
					public getSubtitle(): string;
					public setCustomView(param0: android.view.View): void;
					public isUiFocusable(): boolean;
					public setTitleOptionalHint(param0: boolean): void;
					public setTag(param0: any): void;
					public invalidate(): void;
				}
				export module ActionMode {
					export class Callback {
						public static class: java.lang.Class<android.support.v7.view.ActionMode.Callback>;
						/**
						 * Constructs a new instance of the android.support.v7.view.ActionMode$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onCreateActionMode(param0: android.support.v7.view.ActionMode, param1: android.view.Menu): boolean; onPrepareActionMode(param0: android.support.v7.view.ActionMode, param1: android.view.Menu): boolean; onActionItemClicked(param0: android.support.v7.view.ActionMode, param1: android.view.MenuItem): boolean; onDestroyActionMode(param0: android.support.v7.view.ActionMode): void });
						public constructor();
						public onPrepareActionMode(param0: android.support.v7.view.ActionMode, param1: android.view.Menu): boolean;
						public onDestroyActionMode(param0: android.support.v7.view.ActionMode): void;
						public onActionItemClicked(param0: android.support.v7.view.ActionMode, param1: android.view.MenuItem): boolean;
						public onCreateActionMode(param0: android.support.v7.view.ActionMode, param1: android.view.Menu): boolean;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export class CollapsibleActionView {
					public static class: java.lang.Class<android.support.v7.view.CollapsibleActionView>;
					/**
					 * Constructs a new instance of the android.support.v7.view.CollapsibleActionView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onActionViewExpanded(): void; onActionViewCollapsed(): void });
					public constructor();
					public onActionViewCollapsed(): void;
					public onActionViewExpanded(): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export class ContextThemeWrapper {
					public static class: java.lang.Class<android.support.v7.view.ContextThemeWrapper>;
					public constructor(param0: android.content.Context, param1: number);
					public getAssets(): android.content.res.AssetManager;
					public getThemeResId(): number;
					public getTheme(): android.content.res.Resources.Theme;
					public constructor();
					public getResources(): android.content.res.Resources;
					public constructor(param0: android.content.Context, param1: android.content.res.Resources.Theme);
					public setTheme(param0: number): void;
					public onApplyThemeResource(param0: android.content.res.Resources.Theme, param1: number, param2: boolean): void;
					public attachBaseContext(param0: android.content.Context): void;
					public getSystemService(param0: string): any;
					public applyOverrideConfiguration(param0: android.content.res.Configuration): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export class StandaloneActionMode extends android.support.v7.view.ActionMode implements android.support.v7.view.menu.MenuBuilder.Callback {
					public static class: java.lang.Class<android.support.v7.view.StandaloneActionMode>;
					public getTitle(): string;
					public onCloseSubMenu(param0: android.support.v7.view.menu.SubMenuBuilder): void;
					public constructor(param0: android.content.Context, param1: android.support.v7.widget.ActionBarContextView, param2: android.support.v7.view.ActionMode.Callback, param3: boolean);
					public setTitle(param0: string): void;
					public finish(): void;
					public onMenuModeChange(param0: android.support.v7.view.menu.MenuBuilder): void;
					public getMenuInflater(): android.view.MenuInflater;
					public setTitle(param0: number): void;
					public setSubtitle(param0: number): void;
					public getCustomView(): android.view.View;
					public getMenu(): android.view.Menu;
					public constructor();
					public onCloseMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: boolean): void;
					public setSubtitle(param0: string): void;
					public isTitleOptional(): boolean;
					public getSubtitle(): string;
					public setCustomView(param0: android.view.View): void;
					public onSubMenuSelected(param0: android.support.v7.view.menu.SubMenuBuilder): boolean;
					public onMenuItemSelected(param0: android.support.v7.view.menu.MenuBuilder, param1: android.view.MenuItem): boolean;
					public isUiFocusable(): boolean;
					public setTitleOptionalHint(param0: boolean): void;
					public invalidate(): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export class SupportActionModeWrapper {
					public static class: java.lang.Class<android.support.v7.view.SupportActionModeWrapper>;
					public getTitle(): string;
					public getTitleOptionalHint(): boolean;
					public getTag(): any;
					public setTitle(param0: string): void;
					public finish(): void;
					public getMenuInflater(): android.view.MenuInflater;
					public setTitle(param0: number): void;
					public setSubtitle(param0: number): void;
					public getCustomView(): android.view.View;
					public getMenu(): android.view.Menu;
					public setSubtitle(param0: string): void;
					public isTitleOptional(): boolean;
					public getSubtitle(): string;
					public setCustomView(param0: android.view.View): void;
					public constructor(param0: android.content.Context, param1: android.support.v7.view.ActionMode);
					public setTitleOptionalHint(param0: boolean): void;
					public setTag(param0: any): void;
					public invalidate(): void;
				}
				export module SupportActionModeWrapper {
					export class CallbackWrapper extends android.support.v7.view.ActionMode.Callback {
						public static class: java.lang.Class<android.support.v7.view.SupportActionModeWrapper.CallbackWrapper>;
						public onPrepareActionMode(param0: android.support.v7.view.ActionMode, param1: android.view.Menu): boolean;
						public onDestroyActionMode(param0: android.support.v7.view.ActionMode): void;
						public onActionItemClicked(param0: android.support.v7.view.ActionMode, param1: android.view.MenuItem): boolean;
						public getActionModeWrapper(param0: android.support.v7.view.ActionMode): android.view.ActionMode;
						public constructor(param0: android.content.Context, param1: android.view.ActionMode.Callback);
						public onCreateActionMode(param0: android.support.v7.view.ActionMode, param1: android.view.Menu): boolean;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export class SupportMenuInflater {
					public static class: java.lang.Class<android.support.v7.view.SupportMenuInflater>;
					public inflate(param0: number, param1: android.view.Menu): void;
					public constructor(param0: android.content.Context);
				}
				export module SupportMenuInflater {
					export class InflatedOnMenuItemClickListener {
						public static class: java.lang.Class<android.support.v7.view.SupportMenuInflater.InflatedOnMenuItemClickListener>;
						public constructor(param0: any, param1: string);
						public onMenuItemClick(param0: android.view.MenuItem): boolean;
					}
					export class MenuState {
						public static class: java.lang.Class<android.support.v7.view.SupportMenuInflater.MenuState>;
						public addSubMenuItem(): android.view.SubMenu;
						public hasAddedItem(): boolean;
						public addItem(): void;
						public readGroup(param0: android.util.AttributeSet): void;
						public constructor(param0: android.support.v7.view.SupportMenuInflater, param1: android.view.Menu);
						public resetGroup(): void;
						public readItem(param0: android.util.AttributeSet): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export class ViewPropertyAnimatorCompatSet {
					public static class: java.lang.Class<android.support.v7.view.ViewPropertyAnimatorCompatSet>;
					public setInterpolator(param0: android.view.animation.Interpolator): android.support.v7.view.ViewPropertyAnimatorCompatSet;
					public setDuration(param0: number): android.support.v7.view.ViewPropertyAnimatorCompatSet;
					public play(param0: android.support.v4.view.ViewPropertyAnimatorCompat): android.support.v7.view.ViewPropertyAnimatorCompatSet;
					public constructor();
					public cancel(): void;
					public playSequentially(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.support.v4.view.ViewPropertyAnimatorCompat): android.support.v7.view.ViewPropertyAnimatorCompatSet;
					public start(): void;
					public setListener(param0: android.support.v4.view.ViewPropertyAnimatorListener): android.support.v7.view.ViewPropertyAnimatorCompatSet;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export class WindowCallbackWrapper {
					public static class: java.lang.Class<android.support.v7.view.WindowCallbackWrapper>;
					public onSearchRequested(): boolean;
					public onPointerCaptureChanged(param0: boolean): void;
					public onAttachedToWindow(): void;
					public onWindowStartingActionMode(param0: android.view.ActionMode.Callback): android.view.ActionMode;
					public dispatchKeyEvent(param0: android.view.KeyEvent): boolean;
					public onSearchRequested(param0: any): boolean;
					public onDetachedFromWindow(): void;
					public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;
					public onCreatePanelView(param0: number): android.view.View;
					public onActionModeFinished(param0: android.view.ActionMode): void;
					public onProvideKeyboardShortcuts(param0: java.util.List<any>, param1: android.view.Menu, param2: number): void;
					public onCreatePanelMenu(param0: number, param1: android.view.Menu): boolean;
					public onActionModeStarted(param0: android.view.ActionMode): void;
					public dispatchTrackballEvent(param0: android.view.MotionEvent): boolean;
					public constructor(param0: android.view.Window.Callback);
					public dispatchTouchEvent(param0: android.view.MotionEvent): boolean;
					public onMenuItemSelected(param0: number, param1: android.view.MenuItem): boolean;
					public onMenuOpened(param0: number, param1: android.view.Menu): boolean;
					public onWindowStartingActionMode(param0: android.view.ActionMode.Callback, param1: number): android.view.ActionMode;
					public dispatchKeyShortcutEvent(param0: android.view.KeyEvent): boolean;
					public onPanelClosed(param0: number, param1: android.view.Menu): void;
					public onWindowFocusChanged(param0: boolean): void;
					public onPreparePanel(param0: number, param1: android.view.View, param2: android.view.Menu): boolean;
					public onContentChanged(): void;
					public dispatchGenericMotionEvent(param0: android.view.MotionEvent): boolean;
					public onWindowAttributesChanged(param0: android.view.WindowManager.LayoutParams): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class ActionMenuItem {
						public static class: java.lang.Class<android.support.v7.view.menu.ActionMenuItem>;
						public setActionView(param0: number): android.support.v4.internal.view.SupportMenuItem;
						public getGroupId(): number;
						public setNumericShortcut(param0: string): android.view.MenuItem;
						public getIconTintList(): android.content.res.ColorStateList;
						public getSupportActionProvider(): android.support.v4.view.ActionProvider;
						public getContentDescription(): string;
						public setAlphabeticShortcut(param0: string, param1: number): android.view.MenuItem;
						public setAlphabeticShortcut(param0: string): android.view.MenuItem;
						public setShortcut(param0: string, param1: string): android.view.MenuItem;
						public getMenuInfo(): android.view.ContextMenu.ContextMenuInfo;
						public setCheckable(param0: boolean): android.view.MenuItem;
						public setOnActionExpandListener(param0: android.view.MenuItem.OnActionExpandListener): android.view.MenuItem;
						public constructor(param0: android.content.Context, param1: number, param2: number, param3: number, param4: number, param5: string);
						public invoke(): boolean;
						public getIntent(): android.content.Intent;
						public isEnabled(): boolean;
						public setNumericShortcut(param0: string, param1: number): android.view.MenuItem;
						public collapseActionView(): boolean;
						public setTitle(param0: number): android.view.MenuItem;
						public getNumericModifiers(): number;
						public setIcon(param0: android.graphics.drawable.Drawable): android.view.MenuItem;
						public setActionProvider(param0: android.view.ActionProvider): android.view.MenuItem;
						public getAlphabeticShortcut(): string;
						public getTooltipText(): string;
						public setExclusiveCheckable(param0: boolean): android.support.v7.view.menu.ActionMenuItem;
						public hasSubMenu(): boolean;
						public setTitleCondensed(param0: string): android.view.MenuItem;
						public getNumericShortcut(): string;
						public isCheckable(): boolean;
						public getSubMenu(): android.view.SubMenu;
						public setIcon(param0: number): android.view.MenuItem;
						public getItemId(): number;
						public setIconTintList(param0: android.content.res.ColorStateList): android.view.MenuItem;
						public isChecked(): boolean;
						public setEnabled(param0: boolean): android.view.MenuItem;
						public setShortcut(param0: string, param1: string, param2: number, param3: number): android.view.MenuItem;
						public setIconTintMode(param0: android.graphics.PorterDuff.Mode): android.view.MenuItem;
						public isVisible(): boolean;
						public setVisible(param0: boolean): android.view.MenuItem;
						public setShowAsAction(param0: number): void;
						public getIcon(): android.graphics.drawable.Drawable;
						public setSupportActionProvider(param0: android.support.v4.view.ActionProvider): android.support.v4.internal.view.SupportMenuItem;
						public getOrder(): number;
						public setTitle(param0: string): android.view.MenuItem;
						public getActionView(): android.view.View;
						public isActionViewExpanded(): boolean;
						public setShowAsActionFlags(param0: number): android.support.v4.internal.view.SupportMenuItem;
						public setOnMenuItemClickListener(param0: android.view.MenuItem.OnMenuItemClickListener): android.view.MenuItem;
						public setContentDescription(param0: string): android.support.v4.internal.view.SupportMenuItem;
						public setChecked(param0: boolean): android.view.MenuItem;
						public getTitleCondensed(): string;
						public expandActionView(): boolean;
						public getTitle(): string;
						public getActionProvider(): android.view.ActionProvider;
						public getIconTintMode(): android.graphics.PorterDuff.Mode;
						public setIntent(param0: android.content.Intent): android.view.MenuItem;
						public getAlphabeticModifiers(): number;
						public setTooltipText(param0: string): android.support.v4.internal.view.SupportMenuItem;
						public setActionView(param0: android.view.View): android.support.v4.internal.view.SupportMenuItem;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class ActionMenuItemView extends android.support.v7.widget.AppCompatTextView implements android.support.v7.view.menu.MenuView.ItemView, android.support.v7.widget.ActionMenuView.ActionMenuChildView {
						public static class: java.lang.Class<android.support.v7.view.menu.ActionMenuItemView>;
						public needsDividerBefore(): boolean;
						public showsIcon(): boolean;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public constructor(param0: android.content.Context);
						public setExpandedFormat(param0: boolean): void;
						public setItemInvoker(param0: android.support.v7.view.menu.MenuBuilder.ItemInvoker): void;
						public prefersCondensedTitle(): boolean;
						public needsDividerAfter(): boolean;
						public initialize(param0: android.support.v7.view.menu.MenuItemImpl, param1: number): void;
						public getItemData(): android.support.v7.view.menu.MenuItemImpl;
						public hasText(): boolean;
						public onClick(param0: android.view.View): void;
						public setPopupCallback(param0: android.support.v7.view.menu.ActionMenuItemView.PopupCallback): void;
						public onMeasure(param0: number, param1: number): void;
						public setChecked(param0: boolean): void;
						public onConfigurationChanged(param0: android.content.res.Configuration): void;
						public setIcon(param0: android.graphics.drawable.Drawable): void;
						public setEnabled(param0: boolean): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public setTitle(param0: string): void;
						public onTouchEvent(param0: android.view.MotionEvent): boolean;
						public setShortcut(param0: boolean, param1: string): void;
						public setCheckable(param0: boolean): void;
						public setPadding(param0: number, param1: number, param2: number, param3: number): void;
						public onRestoreInstanceState(param0: android.os.Parcelable): void;
					}
					export module ActionMenuItemView {
						export class ActionMenuItemForwardingListener extends android.support.v7.widget.ForwardingListener {
							public static class: java.lang.Class<android.support.v7.view.menu.ActionMenuItemView.ActionMenuItemForwardingListener>;
							public getPopup(): android.support.v7.view.menu.ShowableListMenu;
							public onForwardingStarted(): boolean;
							public constructor(param0: android.view.View);
							public constructor(param0: android.support.v7.view.menu.ActionMenuItemView);
						}
						export abstract class PopupCallback {
							public static class: java.lang.Class<android.support.v7.view.menu.ActionMenuItemView.PopupCallback>;
							public constructor();
							public getPopup(): android.support.v7.view.menu.ShowableListMenu;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export abstract class BaseMenuPresenter extends android.support.v7.view.menu.MenuPresenter {
						public static class: java.lang.Class<android.support.v7.view.menu.BaseMenuPresenter>;
						public mSystemContext: android.content.Context;
						public mContext: android.content.Context;
						public mMenu: android.support.v7.view.menu.MenuBuilder;
						public mSystemInflater: android.view.LayoutInflater;
						public mInflater: android.view.LayoutInflater;
						public mMenuView: android.support.v7.view.menu.MenuView;
						public onCloseMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: boolean): void;
						public getMenuView(param0: android.view.ViewGroup): android.support.v7.view.menu.MenuView;
						public flagActionItems(): boolean;
						public shouldIncludeItem(param0: number, param1: android.support.v7.view.menu.MenuItemImpl): boolean;
						public createItemView(param0: android.view.ViewGroup): android.support.v7.view.menu.MenuView.ItemView;
						public collapseItemActionView(param0: android.support.v7.view.menu.MenuBuilder, param1: android.support.v7.view.menu.MenuItemImpl): boolean;
						public getItemView(param0: android.support.v7.view.menu.MenuItemImpl, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
						public onSubMenuSelected(param0: android.support.v7.view.menu.SubMenuBuilder): boolean;
						public getId(): number;
						public setId(param0: number): void;
						public bindItemView(param0: android.support.v7.view.menu.MenuItemImpl, param1: android.support.v7.view.menu.MenuView.ItemView): void;
						public filterLeftoverView(param0: android.view.ViewGroup, param1: number): boolean;
						public onSaveInstanceState(): android.os.Parcelable;
						public constructor(param0: android.content.Context, param1: number, param2: number);
						public addItemView(param0: android.view.View, param1: number): void;
						public getCallback(): android.support.v7.view.menu.MenuPresenter.Callback;
						public updateMenuView(param0: boolean): void;
						public initForMenu(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder): void;
						public setCallback(param0: android.support.v7.view.menu.MenuPresenter.Callback): void;
						public onRestoreInstanceState(param0: android.os.Parcelable): void;
						public expandItemActionView(param0: android.support.v7.view.menu.MenuBuilder, param1: android.support.v7.view.menu.MenuItemImpl): boolean;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export abstract class BaseMenuWrapper<T> extends android.support.v7.view.menu.BaseWrapper<any> {
						public static class: java.lang.Class<android.support.v7.view.menu.BaseMenuWrapper<any>>;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class BaseWrapper<T> extends java.lang.Object {
						public static class: java.lang.Class<android.support.v7.view.menu.BaseWrapper<any>>;
						public getWrappedObject(): T;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class CascadingMenuPopup extends android.support.v7.view.menu.MenuPopup implements android.support.v7.view.menu.MenuPresenter {
						public static class: java.lang.Class<android.support.v7.view.menu.CascadingMenuPopup>;
						public onCloseMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: boolean): void;
						public getMenuView(param0: android.view.ViewGroup): android.support.v7.view.menu.MenuView;
						public flagActionItems(): boolean;
						public dismiss(): void;
						public getListView(): android.widget.ListView;
						public closeMenuOnSubMenuOpened(): boolean;
						public onSubMenuSelected(param0: android.support.v7.view.menu.SubMenuBuilder): boolean;
						public constructor(param0: android.content.Context, param1: android.view.View, param2: number, param3: number, param4: boolean);
						public onSaveInstanceState(): android.os.Parcelable;
						public setForceShowIcon(param0: boolean): void;
						public onKey(param0: android.view.View, param1: number, param2: android.view.KeyEvent): boolean;
						public updateMenuView(param0: boolean): void;
						public setOnDismissListener(param0: android.widget.PopupWindow.OnDismissListener): void;
						public addMenu(param0: android.support.v7.view.menu.MenuBuilder): void;
						public setGravity(param0: number): void;
						public setShowTitle(param0: boolean): void;
						public collapseItemActionView(param0: android.support.v7.view.menu.MenuBuilder, param1: android.support.v7.view.menu.MenuItemImpl): boolean;
						public getId(): number;
						public onDismiss(): void;
						public setAnchorView(param0: android.view.View): void;
						public setVerticalOffset(param0: number): void;
						public show(): void;
						public setCallback(param0: android.support.v7.view.menu.MenuPresenter.Callback): void;
						public initForMenu(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder): void;
						public setHorizontalOffset(param0: number): void;
						public onRestoreInstanceState(param0: android.os.Parcelable): void;
						public isShowing(): boolean;
						public expandItemActionView(param0: android.support.v7.view.menu.MenuBuilder, param1: android.support.v7.view.menu.MenuItemImpl): boolean;
					}
					export module CascadingMenuPopup {
						export class CascadingMenuInfo {
							public static class: java.lang.Class<android.support.v7.view.menu.CascadingMenuPopup.CascadingMenuInfo>;
							public window: android.support.v7.widget.MenuPopupWindow;
							public menu: android.support.v7.view.menu.MenuBuilder;
							public position: number;
							public getListView(): android.widget.ListView;
							public constructor(param0: android.support.v7.widget.MenuPopupWindow, param1: android.support.v7.view.menu.MenuBuilder, param2: number);
						}
						export class HorizPosition {
							public static class: java.lang.Class<android.support.v7.view.menu.CascadingMenuPopup.HorizPosition>;
							/**
							 * Constructs a new instance of the android.support.v7.view.menu.CascadingMenuPopup$HorizPosition interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class ExpandedMenuView implements android.support.v7.view.menu.MenuBuilder.ItemInvoker, android.support.v7.view.menu.MenuView {
						public static class: java.lang.Class<android.support.v7.view.menu.ExpandedMenuView>;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public getWindowAnimations(): number;
						public initialize(param0: android.support.v7.view.menu.MenuBuilder): void;
						public onDetachedFromWindow(): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public onItemClick(param0: android.widget.AdapterView<any>, param1: android.view.View, param2: number, param3: number): void;
						public invokeItem(param0: android.support.v7.view.menu.MenuItemImpl): boolean;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class ListMenuItemView implements android.support.v7.view.menu.MenuView.ItemView {
						public static class: java.lang.Class<android.support.v7.view.menu.ListMenuItemView>;
						public setChecked(param0: boolean): void;
						public setGroupDividerEnabled(param0: boolean): void;
						public showsIcon(): boolean;
						public setIcon(param0: android.graphics.drawable.Drawable): void;
						public onFinishInflate(): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public setEnabled(param0: boolean): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public prefersCondensedTitle(): boolean;
						public setTitle(param0: string): void;
						public adjustListItemSelectionBounds(param0: android.graphics.Rect): void;
						public initialize(param0: android.support.v7.view.menu.MenuItemImpl, param1: number): void;
						public setForceShowIcon(param0: boolean): void;
						public setShortcut(param0: boolean, param1: string): void;
						public getItemData(): android.support.v7.view.menu.MenuItemImpl;
						public setCheckable(param0: boolean): void;
						public onMeasure(param0: number, param1: number): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class ListMenuPresenter extends android.support.v7.view.menu.MenuPresenter {
						public static class: java.lang.Class<android.support.v7.view.menu.ListMenuPresenter>;
						public static VIEWS_TAG: string;
						public constructor(param0: android.content.Context, param1: number);
						public onCloseMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: boolean): void;
						public getMenuView(param0: android.view.ViewGroup): android.support.v7.view.menu.MenuView;
						public onItemClick(param0: android.widget.AdapterView<any>, param1: android.view.View, param2: number, param3: number): void;
						public flagActionItems(): boolean;
						public collapseItemActionView(param0: android.support.v7.view.menu.MenuBuilder, param1: android.support.v7.view.menu.MenuItemImpl): boolean;
						public onSubMenuSelected(param0: android.support.v7.view.menu.SubMenuBuilder): boolean;
						public saveHierarchyState(param0: android.os.Bundle): void;
						public setId(param0: number): void;
						public getId(): number;
						public onSaveInstanceState(): android.os.Parcelable;
						public setItemIndexOffset(param0: number): void;
						public restoreHierarchyState(param0: android.os.Bundle): void;
						public getAdapter(): android.widget.ListAdapter;
						public updateMenuView(param0: boolean): void;
						public initForMenu(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder): void;
						public setCallback(param0: android.support.v7.view.menu.MenuPresenter.Callback): void;
						public constructor(param0: number, param1: number);
						public onRestoreInstanceState(param0: android.os.Parcelable): void;
						public expandItemActionView(param0: android.support.v7.view.menu.MenuBuilder, param1: android.support.v7.view.menu.MenuItemImpl): boolean;
					}
					export module ListMenuPresenter {
						export class MenuAdapter {
							public static class: java.lang.Class<android.support.v7.view.menu.ListMenuPresenter.MenuAdapter>;
							public notifyDataSetChanged(): void;
							public getItemId(param0: number): number;
							public constructor(param0: android.support.v7.view.menu.ListMenuPresenter);
							public getCount(): number;
							public getItem(param0: number): android.support.v7.view.menu.MenuItemImpl;
							public getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class MenuAdapter {
						public static class: java.lang.Class<android.support.v7.view.menu.MenuAdapter>;
						public getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
						public getAdapterMenu(): android.support.v7.view.menu.MenuBuilder;
						public setForceShowIcon(param0: boolean): void;
						public notifyDataSetChanged(): void;
						public getItemId(param0: number): number;
						public getCount(): number;
						public constructor(param0: android.support.v7.view.menu.MenuBuilder, param1: android.view.LayoutInflater, param2: boolean, param3: number);
						public getForceShowIcon(): boolean;
						public getItem(param0: number): android.support.v7.view.menu.MenuItemImpl;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class MenuBuilder {
						public static class: java.lang.Class<android.support.v7.view.menu.MenuBuilder>;
						public clearAll(): void;
						public add(param0: number, param1: number, param2: number, param3: string): android.view.MenuItem;
						public changeMenuMode(): void;
						public close(): void;
						public add(param0: string): android.view.MenuItem;
						public addSubMenu(param0: number, param1: number, param2: number, param3: string): android.view.SubMenu;
						public performIdentifierAction(param0: number, param1: number): boolean;
						public setGroupVisible(param0: number, param1: boolean): void;
						public constructor(param0: android.content.Context);
						public setCallback(param0: android.support.v7.view.menu.MenuBuilder.Callback): void;
						public findGroupIndex(param0: number): number;
						public restorePresenterStates(param0: android.os.Bundle): void;
						public removeItem(param0: number): void;
						public clearHeader(): void;
						public addMenuPresenter(param0: android.support.v7.view.menu.MenuPresenter): void;
						public add(param0: number, param1: number, param2: number, param3: number): android.view.MenuItem;
						public size(): number;
						public hasVisibleItems(): boolean;
						public setHeaderTitleInt(param0: number): android.support.v7.view.menu.MenuBuilder;
						public getHeaderTitle(): string;
						public setQwertyMode(param0: boolean): void;
						public startDispatchingItemsChanged(): void;
						public setGroupDividerEnabled(param0: boolean): void;
						public expandItemActionView(param0: android.support.v7.view.menu.MenuItemImpl): boolean;
						public performShortcut(param0: number, param1: android.view.KeyEvent, param2: number): boolean;
						public isGroupDividerEnabled(): boolean;
						public addInternal(param0: number, param1: number, param2: number, param3: string): android.view.MenuItem;
						public restoreActionViewStates(param0: android.os.Bundle): void;
						public setCurrentMenuInfo(param0: android.view.ContextMenu.ContextMenuInfo): void;
						public addSubMenu(param0: number): android.view.SubMenu;
						public add(param0: number): android.view.MenuItem;
						public removeItemAt(param0: number): void;
						public clear(): void;
						public setHeaderIconInt(param0: number): android.support.v7.view.menu.MenuBuilder;
						public onItemsChanged(param0: boolean): void;
						public collapseItemActionView(param0: android.support.v7.view.menu.MenuItemImpl): boolean;
						public getHeaderIcon(): android.graphics.drawable.Drawable;
						public addIntentOptions(param0: number, param1: number, param2: number, param3: android.content.ComponentName, param4: androidNative.Array<android.content.Intent>, param5: android.content.Intent, param6: number, param7: androidNative.Array<android.view.MenuItem>): number;
						public getExpandedItem(): android.support.v7.view.menu.MenuItemImpl;
						public stopDispatchingItemsChanged(): void;
						public getRootMenu(): android.support.v7.view.menu.MenuBuilder;
						public getItem(param0: number): android.view.MenuItem;
						public setShortcutsVisible(param0: boolean): void;
						public addMenuPresenter(param0: android.support.v7.view.menu.MenuPresenter, param1: android.content.Context): void;
						public close(param0: boolean): void;
						public setOverrideVisibleItems(param0: boolean): void;
						public getVisibleItems(): java.util.ArrayList<android.support.v7.view.menu.MenuItemImpl>;
						public getNonActionItems(): java.util.ArrayList<android.support.v7.view.menu.MenuItemImpl>;
						public savePresenterStates(param0: android.os.Bundle): void;
						public setHeaderViewInt(param0: android.view.View): android.support.v7.view.menu.MenuBuilder;
						public saveActionViewStates(param0: android.os.Bundle): void;
						public getActionItems(): java.util.ArrayList<android.support.v7.view.menu.MenuItemImpl>;
						public setOptionalIconsVisible(param0: boolean): void;
						public getActionViewStatesKey(): string;
						public setHeaderIconInt(param0: android.graphics.drawable.Drawable): android.support.v7.view.menu.MenuBuilder;
						public performItemAction(param0: android.view.MenuItem, param1: android.support.v7.view.menu.MenuPresenter, param2: number): boolean;
						public getHeaderView(): android.view.View;
						public findItem(param0: number): android.view.MenuItem;
						public findItemIndex(param0: number): number;
						public flagActionItems(): void;
						public isShortcutKey(param0: number, param1: android.view.KeyEvent): boolean;
						public isShortcutsVisible(): boolean;
						public getContext(): android.content.Context;
						public findGroupIndex(param0: number, param1: number): number;
						public setHeaderTitleInt(param0: string): android.support.v7.view.menu.MenuBuilder;
						public performItemAction(param0: android.view.MenuItem, param1: number): boolean;
						public setDefaultShowAsAction(param0: number): android.support.v7.view.menu.MenuBuilder;
						public setGroupCheckable(param0: number, param1: boolean, param2: boolean): void;
						public addSubMenu(param0: number, param1: number, param2: number, param3: number): android.view.SubMenu;
						public removeGroup(param0: number): void;
						public addSubMenu(param0: string): android.view.SubMenu;
						public removeMenuPresenter(param0: android.support.v7.view.menu.MenuPresenter): void;
						public setGroupEnabled(param0: number, param1: boolean): void;
					}
					export module MenuBuilder {
						export class Callback {
							public static class: java.lang.Class<android.support.v7.view.menu.MenuBuilder.Callback>;
							/**
							 * Constructs a new instance of the android.support.v7.view.menu.MenuBuilder$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onMenuItemSelected(param0: android.support.v7.view.menu.MenuBuilder, param1: android.view.MenuItem): boolean; onMenuModeChange(param0: android.support.v7.view.menu.MenuBuilder): void });
							public constructor();
							public onMenuItemSelected(param0: android.support.v7.view.menu.MenuBuilder, param1: android.view.MenuItem): boolean;
							public onMenuModeChange(param0: android.support.v7.view.menu.MenuBuilder): void;
						}
						export class ItemInvoker {
							public static class: java.lang.Class<android.support.v7.view.menu.MenuBuilder.ItemInvoker>;
							/**
							 * Constructs a new instance of the android.support.v7.view.menu.MenuBuilder$ItemInvoker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { invokeItem(param0: android.support.v7.view.menu.MenuItemImpl): boolean });
							public constructor();
							public invokeItem(param0: android.support.v7.view.menu.MenuItemImpl): boolean;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class MenuDialogHelper extends android.support.v7.view.menu.MenuPresenter.Callback {
						public static class: java.lang.Class<android.support.v7.view.menu.MenuDialogHelper>;
						public onCloseMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: boolean): void;
						public setPresenterCallback(param0: android.support.v7.view.menu.MenuPresenter.Callback): void;
						public onOpenSubMenu(param0: android.support.v7.view.menu.MenuBuilder): boolean;
						public dismiss(): void;
						public onClick(param0: android.content.DialogInterface, param1: number): void;
						public constructor(param0: android.support.v7.view.menu.MenuBuilder);
						public show(param0: android.os.IBinder): void;
						public onKey(param0: android.content.DialogInterface, param1: number, param2: android.view.KeyEvent): boolean;
						public onDismiss(param0: android.content.DialogInterface): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class MenuHelper {
						public static class: java.lang.Class<android.support.v7.view.menu.MenuHelper>;
						/**
						 * Constructs a new instance of the android.support.v7.view.menu.MenuHelper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { setPresenterCallback(param0: android.support.v7.view.menu.MenuPresenter.Callback): void; dismiss(): void });
						public constructor();
						public setPresenterCallback(param0: android.support.v7.view.menu.MenuPresenter.Callback): void;
						public dismiss(): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class MenuItemImpl {
						public static class: java.lang.Class<android.support.v7.view.menu.MenuItemImpl>;
						public requiresActionButton(): boolean;
						public setActionView(param0: number): android.support.v4.internal.view.SupportMenuItem;
						public getGroupId(): number;
						public setNumericShortcut(param0: string): android.view.MenuItem;
						public getIconTintList(): android.content.res.ColorStateList;
						public getSupportActionProvider(): android.support.v4.view.ActionProvider;
						public getOrdering(): number;
						public getContentDescription(): string;
						public isExclusiveCheckable(): boolean;
						public setAlphabeticShortcut(param0: string, param1: number): android.view.MenuItem;
						public setAlphabeticShortcut(param0: string): android.view.MenuItem;
						public setShortcut(param0: string, param1: string): android.view.MenuItem;
						public setActionViewExpanded(param0: boolean): void;
						public setCheckable(param0: boolean): android.view.MenuItem;
						public getMenuInfo(): android.view.ContextMenu.ContextMenuInfo;
						public setOnActionExpandListener(param0: android.view.MenuItem.OnActionExpandListener): android.view.MenuItem;
						public invoke(): boolean;
						public isEnabled(): boolean;
						public getIntent(): android.content.Intent;
						public setNumericShortcut(param0: string, param1: number): android.view.MenuItem;
						public collapseActionView(): boolean;
						public setTitle(param0: number): android.view.MenuItem;
						public toString(): string;
						public hasCollapsibleActionView(): boolean;
						public getNumericModifiers(): number;
						public setIcon(param0: android.graphics.drawable.Drawable): android.view.MenuItem;
						public setActionProvider(param0: android.view.ActionProvider): android.view.MenuItem;
						public getAlphabeticShortcut(): string;
						public getTooltipText(): string;
						public shouldShowIcon(): boolean;
						public hasSubMenu(): boolean;
						public showsTextAsAction(): boolean;
						public setTitleCondensed(param0: string): android.view.MenuItem;
						public getNumericShortcut(): string;
						public actionFormatChanged(): void;
						public isCheckable(): boolean;
						public getSubMenu(): android.view.SubMenu;
						public setIcon(param0: number): android.view.MenuItem;
						public getItemId(): number;
						public setExclusiveCheckable(param0: boolean): void;
						public setIconTintList(param0: android.content.res.ColorStateList): android.view.MenuItem;
						public setEnabled(param0: boolean): android.view.MenuItem;
						public setShortcut(param0: string, param1: string, param2: number, param3: number): android.view.MenuItem;
						public isChecked(): boolean;
						public requestsActionButton(): boolean;
						public setIconTintMode(param0: android.graphics.PorterDuff.Mode): android.view.MenuItem;
						public isVisible(): boolean;
						public setVisible(param0: boolean): android.view.MenuItem;
						public setIsActionButton(param0: boolean): void;
						public setShowAsAction(param0: number): void;
						public setSubMenu(param0: android.support.v7.view.menu.SubMenuBuilder): void;
						public getIcon(): android.graphics.drawable.Drawable;
						public setSupportActionProvider(param0: android.support.v4.view.ActionProvider): android.support.v4.internal.view.SupportMenuItem;
						public setCallback(param0: java.lang.Runnable): android.view.MenuItem;
						public getOrder(): number;
						public setTitle(param0: string): android.view.MenuItem;
						public getActionView(): android.view.View;
						public isActionViewExpanded(): boolean;
						public setShowAsActionFlags(param0: number): android.support.v4.internal.view.SupportMenuItem;
						public setOnMenuItemClickListener(param0: android.view.MenuItem.OnMenuItemClickListener): android.view.MenuItem;
						public setContentDescription(param0: string): android.support.v4.internal.view.SupportMenuItem;
						public setChecked(param0: boolean): android.view.MenuItem;
						public isActionButton(): boolean;
						public getTitleCondensed(): string;
						public expandActionView(): boolean;
						public getTitle(): string;
						public getActionProvider(): android.view.ActionProvider;
						public getIconTintMode(): android.graphics.PorterDuff.Mode;
						public setIntent(param0: android.content.Intent): android.view.MenuItem;
						public getAlphabeticModifiers(): number;
						public setTooltipText(param0: string): android.support.v4.internal.view.SupportMenuItem;
						public setActionView(param0: android.view.View): android.support.v4.internal.view.SupportMenuItem;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class MenuItemWrapperICS extends android.support.v7.view.menu.BaseMenuWrapper<android.support.v4.internal.view.SupportMenuItem> implements android.view.MenuItem {
						public static class: java.lang.Class<android.support.v7.view.menu.MenuItemWrapperICS>;
						public getGroupId(): number;
						public setNumericShortcut(param0: string): android.view.MenuItem;
						public getIconTintList(): android.content.res.ColorStateList;
						public setContentDescription(param0: string): android.view.MenuItem;
						public getContentDescription(): string;
						public setAlphabeticShortcut(param0: string, param1: number): android.view.MenuItem;
						public setShortcut(param0: string, param1: string): android.view.MenuItem;
						public setAlphabeticShortcut(param0: string): android.view.MenuItem;
						public setCheckable(param0: boolean): android.view.MenuItem;
						public getMenuInfo(): android.view.ContextMenu.ContextMenuInfo;
						public setOnActionExpandListener(param0: android.view.MenuItem.OnActionExpandListener): android.view.MenuItem;
						public setShowAsActionFlags(param0: number): android.view.MenuItem;
						public getIntent(): android.content.Intent;
						public isEnabled(): boolean;
						public setNumericShortcut(param0: string, param1: number): android.view.MenuItem;
						public collapseActionView(): boolean;
						public setTitle(param0: number): android.view.MenuItem;
						public getNumericModifiers(): number;
						public setIcon(param0: android.graphics.drawable.Drawable): android.view.MenuItem;
						public setActionProvider(param0: android.view.ActionProvider): android.view.MenuItem;
						public getAlphabeticShortcut(): string;
						public getTooltipText(): string;
						public hasSubMenu(): boolean;
						public setActionView(param0: number): android.view.MenuItem;
						public setTitleCondensed(param0: string): android.view.MenuItem;
						public getNumericShortcut(): string;
						public isCheckable(): boolean;
						public setTooltipText(param0: string): android.view.MenuItem;
						public setIcon(param0: number): android.view.MenuItem;
						public getSubMenu(): android.view.SubMenu;
						public getItemId(): number;
						public setExclusiveCheckable(param0: boolean): void;
						public setIconTintList(param0: android.content.res.ColorStateList): android.view.MenuItem;
						public setShortcut(param0: string, param1: string, param2: number, param3: number): android.view.MenuItem;
						public isChecked(): boolean;
						public setEnabled(param0: boolean): android.view.MenuItem;
						public setIconTintMode(param0: android.graphics.PorterDuff.Mode): android.view.MenuItem;
						public isVisible(): boolean;
						public setVisible(param0: boolean): android.view.MenuItem;
						public setShowAsAction(param0: number): void;
						public getIcon(): android.graphics.drawable.Drawable;
						public getOrder(): number;
						public setTitle(param0: string): android.view.MenuItem;
						public getActionView(): android.view.View;
						public isActionViewExpanded(): boolean;
						public setOnMenuItemClickListener(param0: android.view.MenuItem.OnMenuItemClickListener): android.view.MenuItem;
						public setChecked(param0: boolean): android.view.MenuItem;
						public getTitleCondensed(): string;
						public expandActionView(): boolean;
						public getTitle(): string;
						public setActionView(param0: android.view.View): android.view.MenuItem;
						public getActionProvider(): android.view.ActionProvider;
						public getIconTintMode(): android.graphics.PorterDuff.Mode;
						public setIntent(param0: android.content.Intent): android.view.MenuItem;
						public getAlphabeticModifiers(): number;
					}
					export module MenuItemWrapperICS {
						export class ActionProviderWrapper {
							public static class: java.lang.Class<android.support.v7.view.menu.MenuItemWrapperICS.ActionProviderWrapper>;
							public onPrepareSubMenu(param0: android.view.SubMenu): void;
							public constructor(param0: android.support.v7.view.menu.MenuItemWrapperICS, param1: android.content.Context, param2: android.view.ActionProvider);
							public hasSubMenu(): boolean;
							public onCreateActionView(): android.view.View;
							public onPerformDefaultAction(): boolean;
						}
						export class CollapsibleActionViewWrapper implements android.support.v7.view.CollapsibleActionView {
							public static class: java.lang.Class<android.support.v7.view.menu.MenuItemWrapperICS.CollapsibleActionViewWrapper>;
							public onActionViewCollapsed(): void;
							public onActionViewExpanded(): void;
						}
						export class OnActionExpandListenerWrapper extends android.support.v7.view.menu.BaseWrapper<android.view.MenuItem.OnActionExpandListener> implements android.view.MenuItem.OnActionExpandListener {
							public static class: java.lang.Class<android.support.v7.view.menu.MenuItemWrapperICS.OnActionExpandListenerWrapper>;
							public onMenuItemActionCollapse(param0: android.view.MenuItem): boolean;
							public onMenuItemActionExpand(param0: android.view.MenuItem): boolean;
						}
						export class OnMenuItemClickListenerWrapper extends android.support.v7.view.menu.BaseWrapper<android.view.MenuItem.OnMenuItemClickListener> implements android.view.MenuItem.OnMenuItemClickListener {
							public static class: java.lang.Class<android.support.v7.view.menu.MenuItemWrapperICS.OnMenuItemClickListenerWrapper>;
							public onMenuItemClick(param0: android.view.MenuItem): boolean;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class MenuItemWrapperJB extends android.support.v7.view.menu.MenuItemWrapperICS {
						public static class: java.lang.Class<android.support.v7.view.menu.MenuItemWrapperJB>;
					}
					export module MenuItemWrapperJB {
						export class ActionProviderWrapperJB extends android.support.v7.view.menu.MenuItemWrapperICS.ActionProviderWrapper {
							public static class: java.lang.Class<android.support.v7.view.menu.MenuItemWrapperJB.ActionProviderWrapperJB>;
							public isVisible(): boolean;
							public constructor(param0: android.support.v7.view.menu.MenuItemWrapperICS, param1: android.content.Context, param2: android.view.ActionProvider);
							public onCreateActionView(param0: android.view.MenuItem): android.view.View;
							public refreshVisibility(): void;
							public setVisibilityListener(param0: android.support.v4.view.ActionProvider.VisibilityListener): void;
							public onActionProviderVisibilityChanged(param0: boolean): void;
							public constructor(param0: android.support.v7.view.menu.MenuItemWrapperJB, param1: android.content.Context, param2: android.view.ActionProvider);
							public onCreateActionView(): android.view.View;
							public overridesItemVisibility(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export abstract class MenuPopup implements android.support.v7.view.menu.ShowableListMenu, android.support.v7.view.menu.MenuPresenter {
						public static class: java.lang.Class<android.support.v7.view.menu.MenuPopup>;
						public onCloseMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: boolean): void;
						public getMenuView(param0: android.view.ViewGroup): android.support.v7.view.menu.MenuView;
						public onItemClick(param0: android.widget.AdapterView<any>, param1: android.view.View, param2: number, param3: number): void;
						public static shouldPreserveIconSpacing(param0: android.support.v7.view.menu.MenuBuilder): boolean;
						public flagActionItems(): boolean;
						public dismiss(): void;
						public static measureIndividualMenuWidth(param0: android.widget.ListAdapter, param1: android.view.ViewGroup, param2: android.content.Context, param3: number): number;
						public getListView(): android.widget.ListView;
						public closeMenuOnSubMenuOpened(): boolean;
						public onSubMenuSelected(param0: android.support.v7.view.menu.SubMenuBuilder): boolean;
						public onSaveInstanceState(): android.os.Parcelable;
						public setForceShowIcon(param0: boolean): void;
						public setOnDismissListener(param0: android.widget.PopupWindow.OnDismissListener): void;
						public updateMenuView(param0: boolean): void;
						public addMenu(param0: android.support.v7.view.menu.MenuBuilder): void;
						public setGravity(param0: number): void;
						public setShowTitle(param0: boolean): void;
						public static toMenuAdapter(param0: android.widget.ListAdapter): android.support.v7.view.menu.MenuAdapter;
						public collapseItemActionView(param0: android.support.v7.view.menu.MenuBuilder, param1: android.support.v7.view.menu.MenuItemImpl): boolean;
						public getId(): number;
						public setAnchorView(param0: android.view.View): void;
						public setVerticalOffset(param0: number): void;
						public show(): void;
						public initForMenu(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder): void;
						public setCallback(param0: android.support.v7.view.menu.MenuPresenter.Callback): void;
						public setHorizontalOffset(param0: number): void;
						public onRestoreInstanceState(param0: android.os.Parcelable): void;
						public setEpicenterBounds(param0: android.graphics.Rect): void;
						public getEpicenterBounds(): android.graphics.Rect;
						public expandItemActionView(param0: android.support.v7.view.menu.MenuBuilder, param1: android.support.v7.view.menu.MenuItemImpl): boolean;
						public isShowing(): boolean;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class MenuPopupHelper extends android.support.v7.view.menu.MenuHelper {
						public static class: java.lang.Class<android.support.v7.view.menu.MenuPopupHelper>;
						public tryShow(param0: number, param1: number): boolean;
						public setPresenterCallback(param0: android.support.v7.view.menu.MenuPresenter.Callback): void;
						public tryShow(): boolean;
						public dismiss(): void;
						public getPopup(): android.support.v7.view.menu.MenuPopup;
						public getListView(): android.widget.ListView;
						public show(param0: number, param1: number): void;
						public onDismiss(): void;
						public constructor(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder, param2: android.view.View, param3: boolean, param4: number, param5: number);
						public setAnchorView(param0: android.view.View): void;
						public constructor(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder, param2: android.view.View);
						public setForceShowIcon(param0: boolean): void;
						public show(): void;
						public setOnDismissListener(param0: android.widget.PopupWindow.OnDismissListener): void;
						public constructor(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder);
						public setGravity(param0: number): void;
						public getGravity(): number;
						public constructor(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder, param2: android.view.View, param3: boolean, param4: number);
						public isShowing(): boolean;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class MenuPresenter {
						public static class: java.lang.Class<android.support.v7.view.menu.MenuPresenter>;
						/**
						 * Constructs a new instance of the android.support.v7.view.menu.MenuPresenter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							initForMenu(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder): void;
							getMenuView(param0: android.view.ViewGroup): android.support.v7.view.menu.MenuView;
							updateMenuView(param0: boolean): void;
							setCallback(param0: android.support.v7.view.menu.MenuPresenter.Callback): void;
							onSubMenuSelected(param0: android.support.v7.view.menu.SubMenuBuilder): boolean;
							onCloseMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: boolean): void;
							flagActionItems(): boolean;
							expandItemActionView(param0: android.support.v7.view.menu.MenuBuilder, param1: android.support.v7.view.menu.MenuItemImpl): boolean;
							collapseItemActionView(param0: android.support.v7.view.menu.MenuBuilder, param1: android.support.v7.view.menu.MenuItemImpl): boolean;
							getId(): number;
							onSaveInstanceState(): android.os.Parcelable;
							onRestoreInstanceState(param0: android.os.Parcelable): void;
						});
						public constructor();
						public onCloseMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: boolean): void;
						public getMenuView(param0: android.view.ViewGroup): android.support.v7.view.menu.MenuView;
						public flagActionItems(): boolean;
						public onSaveInstanceState(): android.os.Parcelable;
						public collapseItemActionView(param0: android.support.v7.view.menu.MenuBuilder, param1: android.support.v7.view.menu.MenuItemImpl): boolean;
						public updateMenuView(param0: boolean): void;
						public initForMenu(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder): void;
						public setCallback(param0: android.support.v7.view.menu.MenuPresenter.Callback): void;
						public onSubMenuSelected(param0: android.support.v7.view.menu.SubMenuBuilder): boolean;
						public onRestoreInstanceState(param0: android.os.Parcelable): void;
						public expandItemActionView(param0: android.support.v7.view.menu.MenuBuilder, param1: android.support.v7.view.menu.MenuItemImpl): boolean;
						public getId(): number;
					}
					export module MenuPresenter {
						export class Callback {
							public static class: java.lang.Class<android.support.v7.view.menu.MenuPresenter.Callback>;
							/**
							 * Constructs a new instance of the android.support.v7.view.menu.MenuPresenter$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onCloseMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: boolean): void; onOpenSubMenu(param0: android.support.v7.view.menu.MenuBuilder): boolean });
							public constructor();
							public onCloseMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: boolean): void;
							public onOpenSubMenu(param0: android.support.v7.view.menu.MenuBuilder): boolean;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class MenuView {
						public static class: java.lang.Class<android.support.v7.view.menu.MenuView>;
						/**
						 * Constructs a new instance of the android.support.v7.view.menu.MenuView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { initialize(param0: android.support.v7.view.menu.MenuBuilder): void; getWindowAnimations(): number });
						public constructor();
						public getWindowAnimations(): number;
						public initialize(param0: android.support.v7.view.menu.MenuBuilder): void;
					}
					export module MenuView {
						export class ItemView {
							public static class: java.lang.Class<android.support.v7.view.menu.MenuView.ItemView>;
							/**
							 * Constructs a new instance of the android.support.v7.view.menu.MenuView$ItemView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { initialize(param0: android.support.v7.view.menu.MenuItemImpl, param1: number): void; getItemData(): android.support.v7.view.menu.MenuItemImpl; setTitle(param0: string): void; setEnabled(param0: boolean): void; setCheckable(param0: boolean): void; setChecked(param0: boolean): void; setShortcut(param0: boolean, param1: string): void; setIcon(param0: android.graphics.drawable.Drawable): void; prefersCondensedTitle(): boolean; showsIcon(): boolean });
							public constructor();
							public setTitle(param0: string): void;
							public setIcon(param0: android.graphics.drawable.Drawable): void;
							public prefersCondensedTitle(): boolean;
							public getItemData(): android.support.v7.view.menu.MenuItemImpl;
							public initialize(param0: android.support.v7.view.menu.MenuItemImpl, param1: number): void;
							public setEnabled(param0: boolean): void;
							public setCheckable(param0: boolean): void;
							public setChecked(param0: boolean): void;
							public setShortcut(param0: boolean, param1: string): void;
							public showsIcon(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class MenuWrapperFactory {
						public static class: java.lang.Class<android.support.v7.view.menu.MenuWrapperFactory>;
						public static wrapSupportMenu(param0: android.content.Context, param1: android.support.v4.internal.view.SupportMenu): android.view.Menu;
						public static wrapSupportSubMenu(param0: android.content.Context, param1: android.support.v4.internal.view.SupportSubMenu): android.view.SubMenu;
						public static wrapSupportMenuItem(param0: android.content.Context, param1: android.support.v4.internal.view.SupportMenuItem): android.view.MenuItem;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class MenuWrapperICS extends android.support.v7.view.menu.BaseMenuWrapper<android.support.v4.internal.view.SupportMenu> implements android.view.Menu {
						public static class: java.lang.Class<android.support.v7.view.menu.MenuWrapperICS>;
						public addIntentOptions(param0: number, param1: number, param2: number, param3: android.content.ComponentName, param4: androidNative.Array<android.content.Intent>, param5: android.content.Intent, param6: number, param7: androidNative.Array<android.view.MenuItem>): number;
						public setQwertyMode(param0: boolean): void;
						public add(param0: number, param1: number, param2: number, param3: string): android.view.MenuItem;
						public close(): void;
						public add(param0: string): android.view.MenuItem;
						public addSubMenu(param0: number, param1: number, param2: number, param3: string): android.view.SubMenu;
						public getItem(param0: number): android.view.MenuItem;
						public performIdentifierAction(param0: number, param1: number): boolean;
						public setGroupVisible(param0: number, param1: boolean): void;
						public findItem(param0: number): android.view.MenuItem;
						public performShortcut(param0: number, param1: android.view.KeyEvent, param2: number): boolean;
						public removeItem(param0: number): void;
						public isShortcutKey(param0: number, param1: android.view.KeyEvent): boolean;
						public add(param0: number, param1: number, param2: number, param3: number): android.view.MenuItem;
						public addSubMenu(param0: number): android.view.SubMenu;
						public add(param0: number): android.view.MenuItem;
						public clear(): void;
						public setGroupCheckable(param0: number, param1: boolean, param2: boolean): void;
						public addSubMenu(param0: number, param1: number, param2: number, param3: number): android.view.SubMenu;
						public removeGroup(param0: number): void;
						public addSubMenu(param0: string): android.view.SubMenu;
						public size(): number;
						public setGroupEnabled(param0: number, param1: boolean): void;
						public hasVisibleItems(): boolean;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class ShowableListMenu {
						public static class: java.lang.Class<android.support.v7.view.menu.ShowableListMenu>;
						/**
						 * Constructs a new instance of the android.support.v7.view.menu.ShowableListMenu interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { show(): void; dismiss(): void; isShowing(): boolean; getListView(): android.widget.ListView });
						public constructor();
						public dismiss(): void;
						public show(): void;
						public getListView(): android.widget.ListView;
						public isShowing(): boolean;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class StandardMenuPopup extends android.support.v7.view.menu.MenuPopup implements android.support.v7.view.menu.MenuPresenter {
						public static class: java.lang.Class<android.support.v7.view.menu.StandardMenuPopup>;
						public onCloseMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: boolean): void;
						public getMenuView(param0: android.view.ViewGroup): android.support.v7.view.menu.MenuView;
						public flagActionItems(): boolean;
						public dismiss(): void;
						public getListView(): android.widget.ListView;
						public onSubMenuSelected(param0: android.support.v7.view.menu.SubMenuBuilder): boolean;
						public onSaveInstanceState(): android.os.Parcelable;
						public setForceShowIcon(param0: boolean): void;
						public onKey(param0: android.view.View, param1: number, param2: android.view.KeyEvent): boolean;
						public updateMenuView(param0: boolean): void;
						public setOnDismissListener(param0: android.widget.PopupWindow.OnDismissListener): void;
						public addMenu(param0: android.support.v7.view.menu.MenuBuilder): void;
						public setGravity(param0: number): void;
						public setShowTitle(param0: boolean): void;
						public collapseItemActionView(param0: android.support.v7.view.menu.MenuBuilder, param1: android.support.v7.view.menu.MenuItemImpl): boolean;
						public getId(): number;
						public onDismiss(): void;
						public setAnchorView(param0: android.view.View): void;
						public setVerticalOffset(param0: number): void;
						public show(): void;
						public setCallback(param0: android.support.v7.view.menu.MenuPresenter.Callback): void;
						public initForMenu(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder): void;
						public setHorizontalOffset(param0: number): void;
						public onRestoreInstanceState(param0: android.os.Parcelable): void;
						public constructor(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder, param2: android.view.View, param3: number, param4: number, param5: boolean);
						public isShowing(): boolean;
						public expandItemActionView(param0: android.support.v7.view.menu.MenuBuilder, param1: android.support.v7.view.menu.MenuItemImpl): boolean;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class SubMenuBuilder extends android.support.v7.view.menu.MenuBuilder {
						public static class: java.lang.Class<android.support.v7.view.menu.SubMenuBuilder>;
						public constructor(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder, param2: android.support.v7.view.menu.MenuItemImpl);
						public setQwertyMode(param0: boolean): void;
						public setIcon(param0: number): android.view.SubMenu;
						public getRootMenu(): android.support.v7.view.menu.MenuBuilder;
						public setGroupDividerEnabled(param0: boolean): void;
						public getItem(param0: number): android.view.MenuItem;
						public setHeaderIcon(param0: android.graphics.drawable.Drawable): android.view.SubMenu;
						public expandItemActionView(param0: android.support.v7.view.menu.MenuItemImpl): boolean;
						public setHeaderTitle(param0: number): android.view.SubMenu;
						public setShortcutsVisible(param0: boolean): void;
						public getItem(): android.view.MenuItem;
						public setIcon(param0: android.graphics.drawable.Drawable): android.view.SubMenu;
						public setHeaderIcon(param0: number): android.view.SubMenu;
						public constructor(param0: android.content.Context);
						public setCallback(param0: android.support.v7.view.menu.MenuBuilder.Callback): void;
						public isGroupDividerEnabled(): boolean;
						public isShortcutsVisible(): boolean;
						public getParentMenu(): android.view.Menu;
						public setHeaderView(param0: android.view.View): android.view.SubMenu;
						public isQwertyMode(): boolean;
						public setHeaderTitle(param0: string): android.view.SubMenu;
						public getActionViewStatesKey(): string;
						public collapseItemActionView(param0: android.support.v7.view.menu.MenuItemImpl): boolean;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module view {
				export module menu {
					export class SubMenuWrapperICS extends android.support.v7.view.menu.MenuWrapperICS {
						public static class: java.lang.Class<android.support.v7.view.menu.SubMenuWrapperICS>;
						public setHeaderView(param0: android.view.View): android.view.SubMenu;
						public clearHeader(): void;
						public setIcon(param0: number): android.view.SubMenu;
						public getWrappedObject(): any;
						public setHeaderIcon(param0: android.graphics.drawable.Drawable): android.view.SubMenu;
						public getItem(param0: number): android.view.MenuItem;
						public setHeaderTitle(param0: number): android.view.SubMenu;
						public setIcon(param0: android.graphics.drawable.Drawable): android.view.SubMenu;
						public getItem(): android.view.MenuItem;
						public getWrappedObject(): android.support.v4.internal.view.SupportSubMenu;
						public setHeaderIcon(param0: number): android.view.SubMenu;
						public setHeaderTitle(param0: string): android.view.SubMenu;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export abstract class AbsActionBarView {
					public static class: java.lang.Class<android.support.v7.widget.AbsActionBarView>;
					public mVisAnimListener: android.support.v7.widget.AbsActionBarView.VisibilityAnimListener;
					public mPopupContext: android.content.Context;
					public mMenuView: android.support.v7.widget.ActionMenuView;
					public mActionMenuPresenter: android.support.v7.widget.ActionMenuPresenter;
					public mContentHeight: number;
					public mVisibilityAnim: android.support.v4.view.ViewPropertyAnimatorCompat;
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
					public isOverflowMenuShowPending(): boolean;
					public positionChild(param0: android.view.View, param1: number, param2: number, param3: number, param4: boolean): number;
					public isOverflowReserved(): boolean;
					public dismissPopupMenus(): void;
					public onHoverEvent(param0: android.view.MotionEvent): boolean;
					public getContentHeight(): number;
					public postShowOverflowMenu(): void;
					public setContentHeight(param0: number): void;
					public animateToVisibility(param0: number): void;
					public setVisibility(param0: number): void;
					public measureChildView(param0: android.view.View, param1: number, param2: number, param3: number): number;
					public static next(param0: number, param1: number, param2: boolean): number;
					public hideOverflowMenu(): boolean;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
					public canShowOverflowMenu(): boolean;
					public getAnimatedVisibility(): number;
					public showOverflowMenu(): boolean;
					public isOverflowMenuShowing(): boolean;
					public setupAnimatorToVisibility(param0: number, param1: number): android.support.v4.view.ViewPropertyAnimatorCompat;
				}
				export module AbsActionBarView {
					export class VisibilityAnimListener {
						public static class: java.lang.Class<android.support.v7.widget.AbsActionBarView.VisibilityAnimListener>;
						public withFinalVisibility(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: number): android.support.v7.widget.AbsActionBarView.VisibilityAnimListener;
						public onAnimationCancel(param0: android.view.View): void;
						public onAnimationEnd(param0: android.view.View): void;
						public constructor(param0: android.support.v7.widget.AbsActionBarView);
						public onAnimationStart(param0: android.view.View): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ActionBarBackgroundDrawable {
					public static class: java.lang.Class<android.support.v7.widget.ActionBarBackgroundDrawable>;
					public constructor(param0: android.support.v7.widget.ActionBarContainer);
					public getOutline(param0: any): void;
					public setAlpha(param0: number): void;
					public setColorFilter(param0: android.graphics.ColorFilter): void;
					public draw(param0: android.graphics.Canvas): void;
					public getOpacity(): number;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ActionBarContainer {
					public static class: java.lang.Class<android.support.v7.widget.ActionBarContainer>;
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
					public onMeasure(param0: number, param1: number): void;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
					public setSplitBackground(param0: android.graphics.drawable.Drawable): void;
					public setStackedBackground(param0: android.graphics.drawable.Drawable): void;
					public onHoverEvent(param0: android.view.MotionEvent): boolean;
					public setPrimaryBackground(param0: android.graphics.drawable.Drawable): void;
					public verifyDrawable(param0: android.graphics.drawable.Drawable): boolean;
					public jumpDrawablesToCurrentState(): void;
					public setTransitioning(param0: boolean): void;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public setVisibility(param0: number): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public onFinishInflate(): void;
					public drawableStateChanged(): void;
					public getTabContainer(): android.view.View;
					public setTabContainer(param0: android.support.v7.widget.ScrollingTabContainerView): void;
					public onInterceptTouchEvent(param0: android.view.MotionEvent): boolean;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ActionBarContextView extends android.support.v7.widget.AbsActionBarView {
					public static class: java.lang.Class<android.support.v7.widget.ActionBarContextView>;
					public onDetachedFromWindow(): void;
					public getTitle(): string;
					public closeMode(): void;
					public onMeasure(param0: number, param1: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setTitle(param0: string): void;
					public killMode(): void;
					public onInitializeAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): void;
					public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
					public shouldDelayChildPressedState(): boolean;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public setContentHeight(param0: number): void;
					public setSubtitle(param0: string): void;
					public isTitleOptional(): boolean;
					public getSubtitle(): string;
					public initForMode(param0: android.support.v7.view.ActionMode): void;
					public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public setCustomView(param0: android.view.View): void;
					public hideOverflowMenu(): boolean;
					public setTitleOptional(param0: boolean): void;
					public showOverflowMenu(): boolean;
					public isOverflowMenuShowing(): boolean;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ActionBarOverlayLayout implements android.support.v7.widget.DecorContentParent {
					public static class: java.lang.Class<android.support.v7.widget.ActionBarOverlayLayout>;
					public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
					public getTitle(): string;
					public setLogo(param0: number): void;
					public fitSystemWindows(param0: android.graphics.Rect): boolean;
					public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: androidNative.Array<number>): void;
					public setUiOptions(param0: number): void;
					public setMenu(param0: android.view.Menu, param1: android.support.v7.view.menu.MenuPresenter.Callback): void;
					public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
					public isHideOnContentScrollEnabled(): boolean;
					public setOverlayMode(param0: boolean): void;
					public restoreToolbarHierarchyState(param0: android.util.SparseArray<android.os.Parcelable>): void;
					public getActionBarHideOffset(): number;
					public hideOverflowMenu(): boolean;
					public setWindowCallback(param0: android.view.Window.Callback): void;
					public setIcon(param0: android.graphics.drawable.Drawable): void;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
					public canShowOverflowMenu(): boolean;
					public onWindowSystemUiVisibilityChanged(param0: number): void;
					public isOverflowMenuShowPending(): boolean;
					public setHideOnContentScrollEnabled(param0: boolean): void;
					public initFeature(param0: number): void;
					public hasLogo(): boolean;
					public setMenuPrepared(): void;
					public setHasNonEmbeddedTabs(param0: boolean): void;
					public setIcon(param0: number): void;
					public onWindowVisibilityChanged(param0: number): void;
					public setActionBarVisibilityCallback(param0: android.support.v7.widget.ActionBarOverlayLayout.ActionBarVisibilityCallback): void;
					public generateLayoutParams(param0: android.util.AttributeSet): android.support.v7.widget.ActionBarOverlayLayout.LayoutParams;
					public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
					public isOverflowMenuShowing(): boolean;
					public showOverflowMenu(): boolean;
					public isInOverlayMode(): boolean;
					public saveToolbarHierarchyState(param0: android.util.SparseArray<android.os.Parcelable>): void;
					public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
					public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public generateDefaultLayoutParams(): android.support.v7.widget.ActionBarOverlayLayout.LayoutParams;
					public setShowingForActionMode(param0: boolean): void;
					public setActionBarHideOffset(param0: number): void;
					public onStopNestedScroll(param0: android.view.View): void;
					public draw(param0: android.graphics.Canvas): void;
					public onDetachedFromWindow(): void;
					public onMeasure(param0: number, param1: number): void;
					public dismissPopups(): void;
					public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
					public shouldDelayChildPressedState(): boolean;
					public constructor(param0: android.content.Context);
					public getNestedScrollAxes(): number;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public hasIcon(): boolean;
					public setWindowTitle(param0: string): void;
				}
				export module ActionBarOverlayLayout {
					export class ActionBarVisibilityCallback {
						public static class: java.lang.Class<android.support.v7.widget.ActionBarOverlayLayout.ActionBarVisibilityCallback>;
						/**
						 * Constructs a new instance of the android.support.v7.widget.ActionBarOverlayLayout$ActionBarVisibilityCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onWindowVisibilityChanged(param0: number): void; showForSystem(): void; hideForSystem(): void; enableContentAnimations(param0: boolean): void; onContentScrollStarted(): void; onContentScrollStopped(): void });
						public constructor();
						public onContentScrollStarted(): void;
						public hideForSystem(): void;
						public onContentScrollStopped(): void;
						public onWindowVisibilityChanged(param0: number): void;
						public enableContentAnimations(param0: boolean): void;
						public showForSystem(): void;
					}
					export class LayoutParams {
						public static class: java.lang.Class<android.support.v7.widget.ActionBarOverlayLayout.LayoutParams>;
						public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public constructor(param0: android.view.ViewGroup.LayoutParams);
						public constructor(param0: number, param1: number);
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ActionMenuPresenter extends android.support.v7.view.menu.BaseMenuPresenter {
					public static class: java.lang.Class<android.support.v7.widget.ActionMenuPresenter>;
					public getOverflowIcon(): android.graphics.drawable.Drawable;
					public bindItemView(param0: android.support.v7.view.menu.MenuItemImpl, param1: android.support.v7.view.menu.MenuView.ItemView): void;
					public onSubUiVisibilityChanged(param0: boolean): void;
					public getItemView(param0: android.support.v7.view.menu.MenuItemImpl, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
					public setWidthLimit(param0: number, param1: boolean): void;
					public expandItemActionView(param0: android.support.v7.view.menu.MenuBuilder, param1: android.support.v7.view.menu.MenuItemImpl): boolean;
					public setReserveOverflow(param0: boolean): void;
					public setOverflowIcon(param0: android.graphics.drawable.Drawable): void;
					public constructor(param0: android.content.Context, param1: number, param2: number);
					public onCloseMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: boolean): void;
					public onSubMenuSelected(param0: android.support.v7.view.menu.SubMenuBuilder): boolean;
					public hideOverflowMenu(): boolean;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
					public flagActionItems(): boolean;
					public isOverflowMenuShowPending(): boolean;
					public isOverflowReserved(): boolean;
					public setExpandedActionViewsExclusive(param0: boolean): void;
					public getId(): number;
					public onRestoreInstanceState(param0: android.os.Parcelable): void;
					public collapseItemActionView(param0: android.support.v7.view.menu.MenuBuilder, param1: android.support.v7.view.menu.MenuItemImpl): boolean;
					public updateMenuView(param0: boolean): void;
					public setCallback(param0: android.support.v7.view.menu.MenuPresenter.Callback): void;
					public setItemLimit(param0: number): void;
					public initForMenu(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder): void;
					public constructor(param0: android.content.Context);
					public filterLeftoverView(param0: android.view.ViewGroup, param1: number): boolean;
					public dismissPopupMenus(): boolean;
					public shouldIncludeItem(param0: number, param1: android.support.v7.view.menu.MenuItemImpl): boolean;
					public hideSubMenus(): boolean;
					public getMenuView(param0: android.view.ViewGroup): android.support.v7.view.menu.MenuView;
					public showOverflowMenu(): boolean;
					public isOverflowMenuShowing(): boolean;
					public setMenuView(param0: android.support.v7.widget.ActionMenuView): void;
					public onSaveInstanceState(): android.os.Parcelable;
				}
				export module ActionMenuPresenter {
					export class ActionButtonSubmenu extends android.support.v7.view.menu.MenuPopupHelper {
						public static class: java.lang.Class<android.support.v7.widget.ActionMenuPresenter.ActionButtonSubmenu>;
						public onDismiss(): void;
						public setPresenterCallback(param0: android.support.v7.view.menu.MenuPresenter.Callback): void;
						public constructor(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder, param2: android.view.View, param3: boolean, param4: number, param5: number);
						public constructor(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder, param2: android.view.View);
						public dismiss(): void;
						public constructor(param0: android.support.v7.widget.ActionMenuPresenter, param1: android.content.Context, param2: android.support.v7.view.menu.SubMenuBuilder, param3: android.view.View);
						public constructor(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder);
						public constructor(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder, param2: android.view.View, param3: boolean, param4: number);
					}
					export class ActionMenuPopupCallback extends android.support.v7.view.menu.ActionMenuItemView.PopupCallback {
						public static class: java.lang.Class<android.support.v7.widget.ActionMenuPresenter.ActionMenuPopupCallback>;
						public getPopup(): android.support.v7.view.menu.ShowableListMenu;
					}
					export class OpenOverflowRunnable {
						public static class: java.lang.Class<android.support.v7.widget.ActionMenuPresenter.OpenOverflowRunnable>;
						public run(): void;
						public constructor(param0: android.support.v7.widget.ActionMenuPresenter, param1: android.support.v7.widget.ActionMenuPresenter.OverflowPopup);
					}
					export class OverflowMenuButton extends android.support.v7.widget.AppCompatImageView implements android.support.v7.widget.ActionMenuView.ActionMenuChildView {
						public static class: java.lang.Class<android.support.v7.widget.ActionMenuPresenter.OverflowMenuButton>;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public needsDividerAfter(): boolean;
						public needsDividerBefore(): boolean;
						public constructor(param0: android.support.v7.widget.ActionMenuPresenter, param1: android.content.Context);
						public setFrame(param0: number, param1: number, param2: number, param3: number): boolean;
						public performClick(): boolean;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public constructor(param0: android.content.Context);
					}
					export class OverflowPopup extends android.support.v7.view.menu.MenuPopupHelper {
						public static class: java.lang.Class<android.support.v7.widget.ActionMenuPresenter.OverflowPopup>;
						public constructor(param0: android.support.v7.widget.ActionMenuPresenter, param1: android.content.Context, param2: android.support.v7.view.menu.MenuBuilder, param3: android.view.View, param4: boolean);
						public onDismiss(): void;
						public setPresenterCallback(param0: android.support.v7.view.menu.MenuPresenter.Callback): void;
						public constructor(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder, param2: android.view.View, param3: boolean, param4: number, param5: number);
						public constructor(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder, param2: android.view.View);
						public dismiss(): void;
						public constructor(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder);
						public constructor(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder, param2: android.view.View, param3: boolean, param4: number);
					}
					export class PopupPresenterCallback extends android.support.v7.view.menu.MenuPresenter.Callback {
						public static class: java.lang.Class<android.support.v7.widget.ActionMenuPresenter.PopupPresenterCallback>;
						public onCloseMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: boolean): void;
						public onOpenSubMenu(param0: android.support.v7.view.menu.MenuBuilder): boolean;
					}
					export class SavedState {
						public static class: java.lang.Class<android.support.v7.widget.ActionMenuPresenter.SavedState>;
						public openSubMenuId: number;
						public static CREATOR: android.os.Parcelable.Creator<android.support.v7.widget.ActionMenuPresenter.SavedState>;
						public describeContents(): number;
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ActionMenuView extends android.support.v7.widget.LinearLayoutCompat implements android.support.v7.view.menu.MenuBuilder.ItemInvoker, android.support.v7.view.menu.MenuView {
					public static class: java.lang.Class<android.support.v7.widget.ActionMenuView>;
					public getOverflowIcon(): android.graphics.drawable.Drawable;
					public generateOverflowButtonLayoutParams(): android.support.v7.widget.ActionMenuView.LayoutParams;
					public initialize(param0: android.support.v7.view.menu.MenuBuilder): void;
					public setMenuCallbacks(param0: android.support.v7.view.menu.MenuPresenter.Callback, param1: android.support.v7.view.menu.MenuBuilder.Callback): void;
					public invokeItem(param0: android.support.v7.view.menu.MenuItemImpl): boolean;
					public setPopupTheme(param0: number): void;
					public getPopupTheme(): number;
					public setOverflowIcon(param0: android.graphics.drawable.Drawable): void;
					public getMenu(): android.view.Menu;
					public setOnMenuItemClickListener(param0: android.support.v7.widget.ActionMenuView.OnMenuItemClickListener): void;
					public setOverflowReserved(param0: boolean): void;
					public hideOverflowMenu(): boolean;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
					public generateLayoutParams(param0: android.util.AttributeSet): android.support.v7.widget.ActionMenuView.LayoutParams;
					public generateLayoutParams(param0: android.util.AttributeSet): android.support.v7.widget.LinearLayoutCompat.LayoutParams;
					public onDetachedFromWindow(): void;
					public isOverflowMenuShowPending(): boolean;
					public onMeasure(param0: number, param1: number): void;
					public isOverflowReserved(): boolean;
					public dispatchPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): boolean;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setExpandedActionViewsExclusive(param0: boolean): void;
					public dismissPopupMenus(): void;
					public generateDefaultLayoutParams(): android.support.v7.widget.LinearLayoutCompat.LayoutParams;
					public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.support.v7.widget.LinearLayoutCompat.LayoutParams;
					public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.support.v7.widget.ActionMenuView.LayoutParams;
					public getWindowAnimations(): number;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public hasSupportDividerBeforeChildAt(param0: number): boolean;
					public setPresenter(param0: android.support.v7.widget.ActionMenuPresenter): void;
					public generateDefaultLayoutParams(): android.support.v7.widget.ActionMenuView.LayoutParams;
					public peekMenu(): android.support.v7.view.menu.MenuBuilder;
					public showOverflowMenu(): boolean;
					public isOverflowMenuShowing(): boolean;
				}
				export module ActionMenuView {
					export class ActionMenuChildView {
						public static class: java.lang.Class<android.support.v7.widget.ActionMenuView.ActionMenuChildView>;
						/**
						 * Constructs a new instance of the android.support.v7.widget.ActionMenuView$ActionMenuChildView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { needsDividerBefore(): boolean; needsDividerAfter(): boolean });
						public constructor();
						public needsDividerAfter(): boolean;
						public needsDividerBefore(): boolean;
					}
					export class ActionMenuPresenterCallback extends android.support.v7.view.menu.MenuPresenter.Callback {
						public static class: java.lang.Class<android.support.v7.widget.ActionMenuView.ActionMenuPresenterCallback>;
						public onCloseMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: boolean): void;
						public onOpenSubMenu(param0: android.support.v7.view.menu.MenuBuilder): boolean;
					}
					export class LayoutParams extends android.support.v7.widget.LinearLayoutCompat.LayoutParams {
						public static class: java.lang.Class<android.support.v7.widget.ActionMenuView.LayoutParams>;
						public isOverflowButton: boolean;
						public cellsUsed: number;
						public extraPixels: number;
						public expandable: boolean;
						public preventEdgeOffset: boolean;
						public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public constructor(param0: android.view.ViewGroup.LayoutParams);
						public constructor(param0: android.support.v7.widget.LinearLayoutCompat.LayoutParams);
						public constructor(param0: number, param1: number, param2: number);
						public constructor(param0: number, param1: number);
						public constructor(param0: android.support.v7.widget.ActionMenuView.LayoutParams);
					}
					export class MenuBuilderCallback extends android.support.v7.view.menu.MenuBuilder.Callback {
						public static class: java.lang.Class<android.support.v7.widget.ActionMenuView.MenuBuilderCallback>;
						public onMenuItemSelected(param0: android.support.v7.view.menu.MenuBuilder, param1: android.view.MenuItem): boolean;
						public onMenuModeChange(param0: android.support.v7.view.menu.MenuBuilder): void;
					}
					export class OnMenuItemClickListener {
						public static class: java.lang.Class<android.support.v7.widget.ActionMenuView.OnMenuItemClickListener>;
						/**
						 * Constructs a new instance of the android.support.v7.widget.ActionMenuView$OnMenuItemClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onMenuItemClick(param0: android.view.MenuItem): boolean });
						public constructor();
						public onMenuItemClick(param0: android.view.MenuItem): boolean;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ActivityChooserModel {
					public static class: java.lang.Class<android.support.v7.widget.ActivityChooserModel>;
					public static DEFAULT_HISTORY_FILE_NAME: string;
					public static DEFAULT_HISTORY_MAX_LENGTH: number;
					public setOnChooseActivityListener(param0: android.support.v7.widget.ActivityChooserModel.OnChooseActivityListener): void;
					public getActivityIndex(param0: android.content.pm.ResolveInfo): number;
					public chooseActivity(param0: number): android.content.Intent;
					public static get(param0: android.content.Context, param1: string): android.support.v7.widget.ActivityChooserModel;
					public setActivitySorter(param0: android.support.v7.widget.ActivityChooserModel.ActivitySorter): void;
					public setDefaultActivity(param0: number): void;
					public getActivityCount(): number;
					public setIntent(param0: android.content.Intent): void;
					public getIntent(): android.content.Intent;
					public setHistoryMaxSize(param0: number): void;
					public getDefaultActivity(): android.content.pm.ResolveInfo;
					public getHistoryMaxSize(): number;
					public getActivity(param0: number): android.content.pm.ResolveInfo;
					public getHistorySize(): number;
				}
				export module ActivityChooserModel {
					export class ActivityChooserModelClient {
						public static class: java.lang.Class<android.support.v7.widget.ActivityChooserModel.ActivityChooserModelClient>;
						/**
						 * Constructs a new instance of the android.support.v7.widget.ActivityChooserModel$ActivityChooserModelClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { setActivityChooserModel(param0: android.support.v7.widget.ActivityChooserModel): void });
						public constructor();
						public setActivityChooserModel(param0: android.support.v7.widget.ActivityChooserModel): void;
					}
					export class ActivityResolveInfo extends java.lang.Comparable<android.support.v7.widget.ActivityChooserModel.ActivityResolveInfo> {
						public static class: java.lang.Class<android.support.v7.widget.ActivityChooserModel.ActivityResolveInfo>;
						public resolveInfo: android.content.pm.ResolveInfo;
						public weight: number;
						public constructor(param0: android.content.pm.ResolveInfo);
						public hashCode(): number;
						public equals(param0: any): boolean;
						public compareTo(param0: android.support.v7.widget.ActivityChooserModel.ActivityResolveInfo): number;
						public toString(): string;
					}
					export class ActivitySorter {
						public static class: java.lang.Class<android.support.v7.widget.ActivityChooserModel.ActivitySorter>;
						/**
						 * Constructs a new instance of the android.support.v7.widget.ActivityChooserModel$ActivitySorter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { sort(param0: android.content.Intent, param1: java.util.List<android.support.v7.widget.ActivityChooserModel.ActivityResolveInfo>, param2: java.util.List<android.support.v7.widget.ActivityChooserModel.HistoricalRecord>): void });
						public constructor();
						public sort(param0: android.content.Intent, param1: java.util.List<android.support.v7.widget.ActivityChooserModel.ActivityResolveInfo>, param2: java.util.List<android.support.v7.widget.ActivityChooserModel.HistoricalRecord>): void;
					}
					export class DefaultSorter extends android.support.v7.widget.ActivityChooserModel.ActivitySorter {
						public static class: java.lang.Class<android.support.v7.widget.ActivityChooserModel.DefaultSorter>;
						public sort(param0: android.content.Intent, param1: java.util.List<android.support.v7.widget.ActivityChooserModel.ActivityResolveInfo>, param2: java.util.List<android.support.v7.widget.ActivityChooserModel.HistoricalRecord>): void;
					}
					export class HistoricalRecord {
						public static class: java.lang.Class<android.support.v7.widget.ActivityChooserModel.HistoricalRecord>;
						public activity: android.content.ComponentName;
						public time: number;
						public weight: number;
						public constructor(param0: android.content.ComponentName, param1: number, param2: number);
						public constructor(param0: string, param1: number, param2: number);
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
					export class OnChooseActivityListener {
						public static class: java.lang.Class<android.support.v7.widget.ActivityChooserModel.OnChooseActivityListener>;
						/**
						 * Constructs a new instance of the android.support.v7.widget.ActivityChooserModel$OnChooseActivityListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onChooseActivity(param0: android.support.v7.widget.ActivityChooserModel, param1: android.content.Intent): boolean });
						public constructor();
						public onChooseActivity(param0: android.support.v7.widget.ActivityChooserModel, param1: android.content.Intent): boolean;
					}
					export class PersistHistoryAsyncTask extends android.os.AsyncTask<any, java.lang.Void, java.lang.Void> {
						public static class: java.lang.Class<android.support.v7.widget.ActivityChooserModel.PersistHistoryAsyncTask>;
						public doInBackground(param0: androidNative.Array<any>): java.lang.Void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ActivityChooserView implements android.support.v7.widget.ActivityChooserModel.ActivityChooserModelClient {
					public static class: java.lang.Class<android.support.v7.widget.ActivityChooserView>;
					public onDetachedFromWindow(): void;
					public onMeasure(param0: number, param1: number): void;
					public setDefaultActionButtonContentDescription(param0: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setExpandActivityOverflowButtonDrawable(param0: android.graphics.drawable.Drawable): void;
					public setProvider(param0: android.support.v4.view.ActionProvider): void;
					public setExpandActivityOverflowButtonContentDescription(param0: number): void;
					public onAttachedToWindow(): void;
					public setActivityChooserModel(param0: android.support.v7.widget.ActivityChooserModel): void;
					public getDataModel(): android.support.v7.widget.ActivityChooserModel;
					public isShowingPopup(): boolean;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public dismissPopup(): boolean;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public showPopup(): boolean;
					public setInitialActivityCount(param0: number): void;
					public setOnDismissListener(param0: android.widget.PopupWindow.OnDismissListener): void;
				}
				export module ActivityChooserView {
					export class ActivityChooserViewAdapter {
						public static class: java.lang.Class<android.support.v7.widget.ActivityChooserView.ActivityChooserViewAdapter>;
						public static MAX_ACTIVITY_COUNT_UNLIMITED: number;
						public static MAX_ACTIVITY_COUNT_DEFAULT: number;
						public getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
						public getActivityCount(): number;
						public getShowDefaultActivity(): boolean;
						public getItemViewType(param0: number): number;
						public setShowDefaultActivity(param0: boolean, param1: boolean): void;
						public measureContentWidth(): number;
						public getDataModel(): android.support.v7.widget.ActivityChooserModel;
						public getCount(): number;
						public getItem(param0: number): any;
						public getViewTypeCount(): number;
						public getDefaultActivity(): android.content.pm.ResolveInfo;
						public setShowFooterView(param0: boolean): void;
						public getItemId(param0: number): number;
						public setMaxActivityCount(param0: number): void;
						public getHistorySize(): number;
						public setDataModel(param0: android.support.v7.widget.ActivityChooserModel): void;
					}
					export class Callbacks {
						public static class: java.lang.Class<android.support.v7.widget.ActivityChooserView.Callbacks>;
						public onDismiss(): void;
						public onItemClick(param0: android.widget.AdapterView<any>, param1: android.view.View, param2: number, param3: number): void;
						public onLongClick(param0: android.view.View): boolean;
						public onClick(param0: android.view.View): void;
					}
					export class InnerLayout {
						public static class: java.lang.Class<android.support.v7.widget.ActivityChooserView.InnerLayout>;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class AlertDialogLayout extends android.support.v7.widget.LinearLayoutCompat {
					public static class: java.lang.Class<android.support.v7.widget.AlertDialogLayout>;
					public onMeasure(param0: number, param1: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class AppCompatAutoCompleteTextView {
					public static class: java.lang.Class<android.support.v7.widget.AppCompatAutoCompleteTextView>;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					public setTextAppearance(param0: android.content.Context, param1: number): void;
					public setSupportBackgroundTintList(param0: android.content.res.ColorStateList): void;
					public setSupportBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public setBackgroundResource(param0: number): void;
					public setDropDownBackgroundResource(param0: number): void;
					public getSupportBackgroundTintMode(): android.graphics.PorterDuff.Mode;
					public drawableStateChanged(): void;
					public getSupportBackgroundTintList(): android.content.res.ColorStateList;
					public setCustomSelectionActionModeCallback(param0: android.view.ActionMode.Callback): void;
					public onCreateInputConnection(param0: android.view.inputmethod.EditorInfo): android.view.inputmethod.InputConnection;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class AppCompatBackgroundHelper {
					public static class: java.lang.Class<android.support.v7.widget.AppCompatBackgroundHelper>;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class AppCompatButton {
					public static class: java.lang.Class<android.support.v7.widget.AppCompatButton>;
					public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
					public getAutoSizeStepGranularity(): number;
					public onInitializeAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): void;
					public setSupportBackgroundTintList(param0: android.content.res.ColorStateList): void;
					public setAutoSizeTextTypeUniformWithPresetSizes(param0: androidNative.Array<number>, param1: number): void;
					public getSupportBackgroundTintList(): android.content.res.ColorStateList;
					public setCustomSelectionActionModeCallback(param0: android.view.ActionMode.Callback): void;
					public getAutoSizeTextAvailableSizes(): androidNative.Array<number>;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					public onInitializeAccessibilityNodeInfo(param0: android.view.accessibility.AccessibilityNodeInfo): void;
					public getAutoSizeTextType(): number;
					public setTextAppearance(param0: android.content.Context, param1: number): void;
					public setAutoSizeTextTypeWithDefaults(param0: number): void;
					public setTextSize(param0: number, param1: number): void;
					public setSupportBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public getAutoSizeMaxTextSize(): number;
					public setBackgroundResource(param0: number): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public getSupportBackgroundTintMode(): android.graphics.PorterDuff.Mode;
					public drawableStateChanged(): void;
					public setSupportAllCaps(param0: boolean): void;
					public setAutoSizeTextTypeUniformWithConfiguration(param0: number, param1: number, param2: number, param3: number): void;
					public getAutoSizeMinTextSize(): number;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class AppCompatCheckBox {
					public static class: java.lang.Class<android.support.v7.widget.AppCompatCheckBox>;
					public getSupportButtonTintMode(): android.graphics.PorterDuff.Mode;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public getCompoundPaddingLeft(): number;
					public setSupportButtonTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public setButtonDrawable(param0: android.graphics.drawable.Drawable): void;
					public setButtonDrawable(param0: number): void;
					public getSupportButtonTintList(): android.content.res.ColorStateList;
					public setSupportButtonTintList(param0: android.content.res.ColorStateList): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class AppCompatCheckedTextView {
					public static class: java.lang.Class<android.support.v7.widget.AppCompatCheckedTextView>;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public setTextAppearance(param0: android.content.Context, param1: number): void;
					public drawableStateChanged(): void;
					public setCustomSelectionActionModeCallback(param0: android.view.ActionMode.Callback): void;
					public setCheckMarkDrawable(param0: number): void;
					public onCreateInputConnection(param0: android.view.inputmethod.EditorInfo): android.view.inputmethod.InputConnection;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class AppCompatCompoundButtonHelper {
					public static class: java.lang.Class<android.support.v7.widget.AppCompatCompoundButtonHelper>;
				}
				export module AppCompatCompoundButtonHelper {
					export class DirectSetButtonDrawableInterface {
						public static class: java.lang.Class<android.support.v7.widget.AppCompatCompoundButtonHelper.DirectSetButtonDrawableInterface>;
						/**
						 * Constructs a new instance of the android.support.v7.widget.AppCompatCompoundButtonHelper$DirectSetButtonDrawableInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { setButtonDrawable(param0: android.graphics.drawable.Drawable): void });
						public constructor();
						public setButtonDrawable(param0: android.graphics.drawable.Drawable): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class AppCompatDrawableManager {
					public static class: java.lang.Class<android.support.v7.widget.AppCompatDrawableManager>;
					public onConfigurationChanged(param0: android.content.Context): void;
					public constructor();
					public getDrawable(param0: android.content.Context, param1: number): android.graphics.drawable.Drawable;
					public static getPorterDuffColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): android.graphics.PorterDuffColorFilter;
					public static get(): android.support.v7.widget.AppCompatDrawableManager;
				}
				export module AppCompatDrawableManager {
					export class AsldcInflateDelegate extends android.support.v7.widget.AppCompatDrawableManager.InflateDelegate {
						public static class: java.lang.Class<android.support.v7.widget.AppCompatDrawableManager.AsldcInflateDelegate>;
						public createFromXmlInner(param0: android.content.Context, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
					}
					export class AvdcInflateDelegate extends android.support.v7.widget.AppCompatDrawableManager.InflateDelegate {
						public static class: java.lang.Class<android.support.v7.widget.AppCompatDrawableManager.AvdcInflateDelegate>;
						public createFromXmlInner(param0: android.content.Context, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
					}
					export class ColorFilterLruCache extends android.support.v4.util.LruCache<java.lang.Integer, android.graphics.PorterDuffColorFilter> {
						public static class: java.lang.Class<android.support.v7.widget.AppCompatDrawableManager.ColorFilterLruCache>;
						public constructor(param0: number);
					}
					export class InflateDelegate {
						public static class: java.lang.Class<android.support.v7.widget.AppCompatDrawableManager.InflateDelegate>;
						/**
						 * Constructs a new instance of the android.support.v7.widget.AppCompatDrawableManager$InflateDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { createFromXmlInner(param0: android.content.Context, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): android.graphics.drawable.Drawable });
						public constructor();
						public createFromXmlInner(param0: android.content.Context, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
					}
					export class VdcInflateDelegate extends android.support.v7.widget.AppCompatDrawableManager.InflateDelegate {
						public static class: java.lang.Class<android.support.v7.widget.AppCompatDrawableManager.VdcInflateDelegate>;
						public createFromXmlInner(param0: android.content.Context, param1: org.xmlpull.v1.XmlPullParser, param2: android.util.AttributeSet, param3: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class AppCompatEditText {
					public static class: java.lang.Class<android.support.v7.widget.AppCompatEditText>;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					public setTextAppearance(param0: android.content.Context, param1: number): void;
					public setSupportBackgroundTintList(param0: android.content.res.ColorStateList): void;
					public getText(): android.text.Editable;
					public setSupportBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public setBackgroundResource(param0: number): void;
					public getSupportBackgroundTintMode(): android.graphics.PorterDuff.Mode;
					public drawableStateChanged(): void;
					public getSupportBackgroundTintList(): android.content.res.ColorStateList;
					public setCustomSelectionActionModeCallback(param0: android.view.ActionMode.Callback): void;
					public onCreateInputConnection(param0: android.view.inputmethod.EditorInfo): android.view.inputmethod.InputConnection;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class AppCompatHintHelper {
					public static class: java.lang.Class<android.support.v7.widget.AppCompatHintHelper>;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class AppCompatImageButton {
					public static class: java.lang.Class<android.support.v7.widget.AppCompatImageButton>;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public hasOverlappingRendering(): boolean;
					public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					public setImageURI(param0: android.net.Uri): void;
					public setSupportImageTintList(param0: android.content.res.ColorStateList): void;
					public setSupportBackgroundTintList(param0: android.content.res.ColorStateList): void;
					public setImageBitmap(param0: android.graphics.Bitmap): void;
					public setSupportBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public getSupportImageTintList(): android.content.res.ColorStateList;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public getSupportImageTintMode(): android.graphics.PorterDuff.Mode;
					public setBackgroundResource(param0: number): void;
					public setImageResource(param0: number): void;
					public setSupportImageTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public setImageDrawable(param0: android.graphics.drawable.Drawable): void;
					public getSupportBackgroundTintMode(): android.graphics.PorterDuff.Mode;
					public drawableStateChanged(): void;
					public getSupportBackgroundTintList(): android.content.res.ColorStateList;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class AppCompatImageHelper {
					public static class: java.lang.Class<android.support.v7.widget.AppCompatImageHelper>;
					public loadFromAttributes(param0: android.util.AttributeSet, param1: number): void;
					public constructor(param0: android.widget.ImageView);
					public setImageResource(param0: number): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class AppCompatImageView {
					public static class: java.lang.Class<android.support.v7.widget.AppCompatImageView>;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public hasOverlappingRendering(): boolean;
					public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					public setImageURI(param0: android.net.Uri): void;
					public setSupportImageTintList(param0: android.content.res.ColorStateList): void;
					public setSupportBackgroundTintList(param0: android.content.res.ColorStateList): void;
					public setImageBitmap(param0: android.graphics.Bitmap): void;
					public setSupportBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public getSupportImageTintList(): android.content.res.ColorStateList;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public getSupportImageTintMode(): android.graphics.PorterDuff.Mode;
					public setBackgroundResource(param0: number): void;
					public setImageResource(param0: number): void;
					public setSupportImageTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public setImageDrawable(param0: android.graphics.drawable.Drawable): void;
					public getSupportBackgroundTintMode(): android.graphics.PorterDuff.Mode;
					public drawableStateChanged(): void;
					public getSupportBackgroundTintList(): android.content.res.ColorStateList;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class AppCompatMultiAutoCompleteTextView {
					public static class: java.lang.Class<android.support.v7.widget.AppCompatMultiAutoCompleteTextView>;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					public setTextAppearance(param0: android.content.Context, param1: number): void;
					public setSupportBackgroundTintList(param0: android.content.res.ColorStateList): void;
					public setSupportBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public setBackgroundResource(param0: number): void;
					public setDropDownBackgroundResource(param0: number): void;
					public getSupportBackgroundTintMode(): android.graphics.PorterDuff.Mode;
					public drawableStateChanged(): void;
					public getSupportBackgroundTintList(): android.content.res.ColorStateList;
					public onCreateInputConnection(param0: android.view.inputmethod.EditorInfo): android.view.inputmethod.InputConnection;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class AppCompatPopupWindow {
					public static class: java.lang.Class<android.support.v7.widget.AppCompatPopupWindow>;
					public update(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public showAsDropDown(param0: android.view.View, param1: number, param2: number, param3: number): void;
					public showAsDropDown(param0: android.view.View, param1: number, param2: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class AppCompatProgressBarHelper {
					public static class: java.lang.Class<android.support.v7.widget.AppCompatProgressBarHelper>;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class AppCompatRadioButton {
					public static class: java.lang.Class<android.support.v7.widget.AppCompatRadioButton>;
					public getSupportButtonTintMode(): android.graphics.PorterDuff.Mode;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public getCompoundPaddingLeft(): number;
					public setSupportButtonTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public setButtonDrawable(param0: android.graphics.drawable.Drawable): void;
					public setButtonDrawable(param0: number): void;
					public getSupportButtonTintList(): android.content.res.ColorStateList;
					public setSupportButtonTintList(param0: android.content.res.ColorStateList): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class AppCompatRatingBar {
					public static class: java.lang.Class<android.support.v7.widget.AppCompatRatingBar>;
					public onMeasure(param0: number, param1: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class AppCompatSeekBar {
					public static class: java.lang.Class<android.support.v7.widget.AppCompatSeekBar>;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public onDraw(param0: android.graphics.Canvas): void;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public drawableStateChanged(): void;
					public jumpDrawablesToCurrentState(): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class AppCompatSeekBarHelper extends android.support.v7.widget.AppCompatProgressBarHelper {
					public static class: java.lang.Class<android.support.v7.widget.AppCompatSeekBarHelper>;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class AppCompatSpinner {
					public static class: java.lang.Class<android.support.v7.widget.AppCompatSpinner>;
					public constructor(param0: android.content.Context, param1: number);
					public setAdapter(param0: android.widget.SpinnerAdapter): void;
					public getPrompt(): string;
					public setSupportBackgroundTintList(param0: android.content.res.ColorStateList): void;
					public setPopupBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					public setDropDownVerticalOffset(param0: number): void;
					public setDropDownWidth(param0: number): void;
					public getPopupContext(): android.content.Context;
					public setDropDownHorizontalOffset(param0: number): void;
					public setPopupBackgroundResource(param0: number): void;
					public getSupportBackgroundTintList(): android.content.res.ColorStateList;
					public setPrompt(param0: string): void;
					public onDetachedFromWindow(): void;
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
					public onMeasure(param0: number, param1: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number, param4: android.content.res.Resources.Theme);
					public performClick(): boolean;
					public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public getDropDownHorizontalOffset(): number;
					public getDropDownVerticalOffset(): number;
					public setSupportBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public getPopupBackground(): android.graphics.drawable.Drawable;
					public getDropDownWidth(): number;
					public setBackgroundResource(param0: number): void;
					public getSupportBackgroundTintMode(): android.graphics.PorterDuff.Mode;
					public drawableStateChanged(): void;
				}
				export module AppCompatSpinner {
					export class DropDownAdapter {
						public static class: java.lang.Class<android.support.v7.widget.AppCompatSpinner.DropDownAdapter>;
						public isEnabled(param0: number): boolean;
						public getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
						public areAllItemsEnabled(): boolean;
						public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;
						public registerDataSetObserver(param0: android.database.DataSetObserver): void;
						public getItemViewType(param0: number): number;
						public getCount(): number;
						public getItem(param0: number): any;
						public hasStableIds(): boolean;
						public getViewTypeCount(): number;
						public getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
						public getItemId(param0: number): number;
						public isEmpty(): boolean;
						public constructor(param0: android.widget.SpinnerAdapter, param1: android.content.res.Resources.Theme);
					}
					export class DropdownPopup extends android.support.v7.widget.ListPopupWindow {
						public static class: java.lang.Class<android.support.v7.widget.AppCompatSpinner.DropdownPopup>;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public setAdapter(param0: android.widget.ListAdapter): void;
						public dismiss(): void;
						public show(): void;
						public getListView(): android.widget.ListView;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
						public setPromptText(param0: string): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public constructor(param0: android.support.v7.widget.AppCompatSpinner, param1: android.content.Context, param2: android.util.AttributeSet, param3: number);
						public constructor(param0: android.content.Context);
						public getHintText(): string;
						public isShowing(): boolean;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class AppCompatTextHelper {
					public static class: java.lang.Class<android.support.v7.widget.AppCompatTextHelper>;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class AppCompatTextView {
					public static class: java.lang.Class<android.support.v7.widget.AppCompatTextView>;
					public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
					public setTextMetricsParamsCompat(param0: android.support.v4.text.PrecomputedTextCompat.Params): void;
					public getAutoSizeStepGranularity(): number;
					public setSupportBackgroundTintList(param0: android.content.res.ColorStateList): void;
					public getFirstBaselineToTopHeight(): number;
					public setAutoSizeTextTypeUniformWithPresetSizes(param0: androidNative.Array<number>, param1: number): void;
					public setFirstBaselineToTopHeight(param0: number): void;
					public getSupportBackgroundTintList(): android.content.res.ColorStateList;
					public setCustomSelectionActionModeCallback(param0: android.view.ActionMode.Callback): void;
					public getAutoSizeTextAvailableSizes(): androidNative.Array<number>;
					public onCreateInputConnection(param0: android.view.inputmethod.EditorInfo): android.view.inputmethod.InputConnection;
					public getTextMetricsParamsCompat(): android.support.v4.text.PrecomputedTextCompat.Params;
					public onMeasure(param0: number, param1: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setPrecomputedText(param0: android.support.v4.text.PrecomputedTextCompat): void;
					public getText(): string;
					public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					public setLastBaselineToBottomHeight(param0: number): void;
					public getAutoSizeTextType(): number;
					public setTextAppearance(param0: android.content.Context, param1: number): void;
					public setAutoSizeTextTypeWithDefaults(param0: number): void;
					public setTextSize(param0: number, param1: number): void;
					public setTextFuture(param0: java.util.concurrent.Future<android.support.v4.text.PrecomputedTextCompat>): void;
					public setSupportBackgroundTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public getLastBaselineToBottomHeight(): number;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public getAutoSizeMaxTextSize(): number;
					public setBackgroundResource(param0: number): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public setLineHeight(param0: number): void;
					public getSupportBackgroundTintMode(): android.graphics.PorterDuff.Mode;
					public drawableStateChanged(): void;
					public setAutoSizeTextTypeUniformWithConfiguration(param0: number, param1: number, param2: number, param3: number): void;
					public getAutoSizeMinTextSize(): number;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class AppCompatTextViewAutoSizeHelper {
					public static class: java.lang.Class<android.support.v7.widget.AppCompatTextViewAutoSizeHelper>;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ButtonBarLayout {
					public static class: java.lang.Class<android.support.v7.widget.ButtonBarLayout>;
					public onMeasure(param0: number, param1: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public setAllowStacking(param0: boolean): void;
					public getMinimumHeight(): number;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ContentFrameLayout {
					public static class: java.lang.Class<android.support.v7.widget.ContentFrameLayout>;
					public onDetachedFromWindow(): void;
					public onMeasure(param0: number, param1: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setAttachListener(param0: android.support.v7.widget.ContentFrameLayout.OnAttachListener): void;
					public getFixedHeightMajor(): android.util.TypedValue;
					public getFixedHeightMinor(): android.util.TypedValue;
					public onAttachedToWindow(): void;
					public getMinWidthMinor(): android.util.TypedValue;
					public getMinWidthMajor(): android.util.TypedValue;
					public getFixedWidthMinor(): android.util.TypedValue;
					public getFixedWidthMajor(): android.util.TypedValue;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public dispatchFitSystemWindows(param0: android.graphics.Rect): void;
					public setDecorPadding(param0: number, param1: number, param2: number, param3: number): void;
				}
				export module ContentFrameLayout {
					export class OnAttachListener {
						public static class: java.lang.Class<android.support.v7.widget.ContentFrameLayout.OnAttachListener>;
						/**
						 * Constructs a new instance of the android.support.v7.widget.ContentFrameLayout$OnAttachListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onDetachedFromWindow(): void; onAttachedFromWindow(): void });
						public constructor();
						public onAttachedFromWindow(): void;
						public onDetachedFromWindow(): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class DecorContentParent {
					public static class: java.lang.Class<android.support.v7.widget.DecorContentParent>;
					/**
					 * Constructs a new instance of the android.support.v7.widget.DecorContentParent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setWindowCallback(param0: android.view.Window.Callback): void;
						setWindowTitle(param0: string): void;
						getTitle(): string;
						initFeature(param0: number): void;
						setUiOptions(param0: number): void;
						hasIcon(): boolean;
						hasLogo(): boolean;
						setIcon(param0: number): void;
						setIcon(param0: android.graphics.drawable.Drawable): void;
						setLogo(param0: number): void;
						canShowOverflowMenu(): boolean;
						isOverflowMenuShowing(): boolean;
						isOverflowMenuShowPending(): boolean;
						showOverflowMenu(): boolean;
						hideOverflowMenu(): boolean;
						setMenuPrepared(): void;
						setMenu(param0: android.view.Menu, param1: android.support.v7.view.menu.MenuPresenter.Callback): void;
						saveToolbarHierarchyState(param0: android.util.SparseArray<android.os.Parcelable>): void;
						restoreToolbarHierarchyState(param0: android.util.SparseArray<android.os.Parcelable>): void;
						dismissPopups(): void;
					});
					public constructor();
					public getTitle(): string;
					public setLogo(param0: number): void;
					public isOverflowMenuShowPending(): boolean;
					public dismissPopups(): void;
					public saveToolbarHierarchyState(param0: android.util.SparseArray<android.os.Parcelable>): void;
					public initFeature(param0: number): void;
					public hasLogo(): boolean;
					public setUiOptions(param0: number): void;
					public setMenuPrepared(): void;
					public setMenu(param0: android.view.Menu, param1: android.support.v7.view.menu.MenuPresenter.Callback): void;
					public setIcon(param0: number): void;
					public restoreToolbarHierarchyState(param0: android.util.SparseArray<android.os.Parcelable>): void;
					public hasIcon(): boolean;
					public hideOverflowMenu(): boolean;
					public setWindowCallback(param0: android.view.Window.Callback): void;
					public setIcon(param0: android.graphics.drawable.Drawable): void;
					public setWindowTitle(param0: string): void;
					public canShowOverflowMenu(): boolean;
					public isOverflowMenuShowing(): boolean;
					public showOverflowMenu(): boolean;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class DecorToolbar {
					public static class: java.lang.Class<android.support.v7.widget.DecorToolbar>;
					/**
					 * Constructs a new instance of the android.support.v7.widget.DecorToolbar interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getViewGroup(): android.view.ViewGroup;
						getContext(): android.content.Context;
						hasExpandedActionView(): boolean;
						collapseActionView(): void;
						setWindowCallback(param0: android.view.Window.Callback): void;
						setWindowTitle(param0: string): void;
						getTitle(): string;
						setTitle(param0: string): void;
						getSubtitle(): string;
						setSubtitle(param0: string): void;
						initProgress(): void;
						initIndeterminateProgress(): void;
						hasIcon(): boolean;
						hasLogo(): boolean;
						setIcon(param0: number): void;
						setIcon(param0: android.graphics.drawable.Drawable): void;
						setLogo(param0: number): void;
						setLogo(param0: android.graphics.drawable.Drawable): void;
						canShowOverflowMenu(): boolean;
						isOverflowMenuShowing(): boolean;
						isOverflowMenuShowPending(): boolean;
						showOverflowMenu(): boolean;
						hideOverflowMenu(): boolean;
						setMenuPrepared(): void;
						setMenu(param0: android.view.Menu, param1: android.support.v7.view.menu.MenuPresenter.Callback): void;
						dismissPopupMenus(): void;
						getDisplayOptions(): number;
						setDisplayOptions(param0: number): void;
						setEmbeddedTabView(param0: android.support.v7.widget.ScrollingTabContainerView): void;
						hasEmbeddedTabs(): boolean;
						isTitleTruncated(): boolean;
						setCollapsible(param0: boolean): void;
						setHomeButtonEnabled(param0: boolean): void;
						getNavigationMode(): number;
						setNavigationMode(param0: number): void;
						setDropdownParams(param0: android.widget.SpinnerAdapter, param1: android.widget.AdapterView.OnItemSelectedListener): void;
						setDropdownSelectedPosition(param0: number): void;
						getDropdownSelectedPosition(): number;
						getDropdownItemCount(): number;
						setCustomView(param0: android.view.View): void;
						getCustomView(): android.view.View;
						animateToVisibility(param0: number): void;
						setupAnimatorToVisibility(param0: number, param1: number): android.support.v4.view.ViewPropertyAnimatorCompat;
						setNavigationIcon(param0: android.graphics.drawable.Drawable): void;
						setNavigationIcon(param0: number): void;
						setNavigationContentDescription(param0: string): void;
						setNavigationContentDescription(param0: number): void;
						setDefaultNavigationContentDescription(param0: number): void;
						setDefaultNavigationIcon(param0: android.graphics.drawable.Drawable): void;
						saveHierarchyState(param0: android.util.SparseArray<android.os.Parcelable>): void;
						restoreHierarchyState(param0: android.util.SparseArray<android.os.Parcelable>): void;
						setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
						getHeight(): number;
						setVisibility(param0: number): void;
						getVisibility(): number;
						setMenuCallbacks(param0: android.support.v7.view.menu.MenuPresenter.Callback, param1: android.support.v7.view.menu.MenuBuilder.Callback): void;
						getMenu(): android.view.Menu;
					});
					public constructor();
					public getTitle(): string;
					public setLogo(param0: number): void;
					public getNavigationMode(): number;
					public setTitle(param0: string): void;
					public setDropdownParams(param0: android.widget.SpinnerAdapter, param1: android.widget.AdapterView.OnItemSelectedListener): void;
					public saveHierarchyState(param0: android.util.SparseArray<android.os.Parcelable>): void;
					public setMenu(param0: android.view.Menu, param1: android.support.v7.view.menu.MenuPresenter.Callback): void;
					public getCustomView(): android.view.View;
					public setDefaultNavigationContentDescription(param0: number): void;
					public hideOverflowMenu(): boolean;
					public getVisibility(): number;
					public setCollapsible(param0: boolean): void;
					public setWindowCallback(param0: android.view.Window.Callback): void;
					public setIcon(param0: android.graphics.drawable.Drawable): void;
					public canShowOverflowMenu(): boolean;
					public setupAnimatorToVisibility(param0: number, param1: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public isOverflowMenuShowPending(): boolean;
					public getHeight(): number;
					public getViewGroup(): android.view.ViewGroup;
					public setDefaultNavigationIcon(param0: android.graphics.drawable.Drawable): void;
					public hasLogo(): boolean;
					public setMenuPrepared(): void;
					public setDisplayOptions(param0: number): void;
					public getDropdownItemCount(): number;
					public isTitleTruncated(): boolean;
					public setLogo(param0: android.graphics.drawable.Drawable): void;
					public setNavigationIcon(param0: android.graphics.drawable.Drawable): void;
					public setIcon(param0: number): void;
					public animateToVisibility(param0: number): void;
					public setVisibility(param0: number): void;
					public initProgress(): void;
					public setCustomView(param0: android.view.View): void;
					public hasExpandedActionView(): boolean;
					public isOverflowMenuShowing(): boolean;
					public showOverflowMenu(): boolean;
					public setDropdownSelectedPosition(param0: number): void;
					public setEmbeddedTabView(param0: android.support.v7.widget.ScrollingTabContainerView): void;
					public setMenuCallbacks(param0: android.support.v7.view.menu.MenuPresenter.Callback, param1: android.support.v7.view.menu.MenuBuilder.Callback): void;
					public setNavigationContentDescription(param0: number): void;
					public getContext(): android.content.Context;
					public getMenu(): android.view.Menu;
					public getDropdownSelectedPosition(): number;
					public setNavigationIcon(param0: number): void;
					public dismissPopupMenus(): void;
					public collapseActionView(): void;
					public setNavigationMode(param0: number): void;
					public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					public initIndeterminateProgress(): void;
					public restoreHierarchyState(param0: android.util.SparseArray<android.os.Parcelable>): void;
					public setNavigationContentDescription(param0: string): void;
					public setSubtitle(param0: string): void;
					public hasEmbeddedTabs(): boolean;
					public getSubtitle(): string;
					public getDisplayOptions(): number;
					public hasIcon(): boolean;
					public setHomeButtonEnabled(param0: boolean): void;
					public setWindowTitle(param0: string): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class DialogTitle {
					public static class: java.lang.Class<android.support.v7.widget.DialogTitle>;
					public onMeasure(param0: number, param1: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public setCustomSelectionActionModeCallback(param0: android.view.ActionMode.Callback): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class DrawableUtils {
					public static class: java.lang.Class<android.support.v7.widget.DrawableUtils>;
					public static INSETS_NONE: android.graphics.Rect;
					public static canSafelyMutateDrawable(param0: android.graphics.drawable.Drawable): boolean;
					public static getOpticalBounds(param0: android.graphics.drawable.Drawable): android.graphics.Rect;
					public static parseTintMode(param0: number, param1: android.graphics.PorterDuff.Mode): android.graphics.PorterDuff.Mode;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class DropDownListView {
					public static class: java.lang.Class<android.support.v7.widget.DropDownListView>;
					public static INVALID_POSITION: number;
					public static NO_POSITION: number;
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
					public lookForSelectablePosition(param0: number, param1: boolean): number;
					public onDetachedFromWindow(): void;
					public isFocused(): boolean;
					public hasWindowFocus(): boolean;
					public onHoverEvent(param0: android.view.MotionEvent): boolean;
					public onForwardedEvent(param0: android.view.MotionEvent, param1: number): boolean;
					public measureHeightOfChildrenCompat(param0: number, param1: number, param2: number, param3: number, param4: number): number;
					public drawableStateChanged(): void;
					public setSelector(param0: android.graphics.drawable.Drawable): void;
					public hasFocus(): boolean;
					public isInTouchMode(): boolean;
					public dispatchDraw(param0: android.graphics.Canvas): void;
				}
				export module DropDownListView {
					export class GateKeeperDrawable extends android.support.v7.graphics.drawable.DrawableWrapper {
						public static class: java.lang.Class<android.support.v7.widget.DropDownListView.GateKeeperDrawable>;
						public draw(param0: android.graphics.Canvas): void;
						public setVisible(param0: boolean, param1: boolean): boolean;
						public setHotspot(param0: number, param1: number): void;
						public setHotspotBounds(param0: number, param1: number, param2: number, param3: number): void;
						public setState(param0: androidNative.Array<number>): boolean;
					}
					export class ResolveHoverRunnable {
						public static class: java.lang.Class<android.support.v7.widget.DropDownListView.ResolveHoverRunnable>;
						public run(): void;
						public cancel(): void;
						public post(): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class FitWindowsFrameLayout implements android.support.v7.widget.FitWindowsViewGroup {
					public static class: java.lang.Class<android.support.v7.widget.FitWindowsFrameLayout>;
					public fitSystemWindows(param0: android.graphics.Rect): boolean;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public setOnFitSystemWindowsListener(param0: android.support.v7.widget.FitWindowsViewGroup.OnFitSystemWindowsListener): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class FitWindowsLinearLayout implements android.support.v7.widget.FitWindowsViewGroup {
					public static class: java.lang.Class<android.support.v7.widget.FitWindowsLinearLayout>;
					public fitSystemWindows(param0: android.graphics.Rect): boolean;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public setOnFitSystemWindowsListener(param0: android.support.v7.widget.FitWindowsViewGroup.OnFitSystemWindowsListener): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class FitWindowsViewGroup {
					public static class: java.lang.Class<android.support.v7.widget.FitWindowsViewGroup>;
					/**
					 * Constructs a new instance of the android.support.v7.widget.FitWindowsViewGroup interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { setOnFitSystemWindowsListener(param0: android.support.v7.widget.FitWindowsViewGroup.OnFitSystemWindowsListener): void });
					public constructor();
					public setOnFitSystemWindowsListener(param0: android.support.v7.widget.FitWindowsViewGroup.OnFitSystemWindowsListener): void;
				}
				export module FitWindowsViewGroup {
					export class OnFitSystemWindowsListener {
						public static class: java.lang.Class<android.support.v7.widget.FitWindowsViewGroup.OnFitSystemWindowsListener>;
						/**
						 * Constructs a new instance of the android.support.v7.widget.FitWindowsViewGroup$OnFitSystemWindowsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onFitSystemWindows(param0: android.graphics.Rect): void });
						public constructor();
						public onFitSystemWindows(param0: android.graphics.Rect): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export abstract class ForwardingListener {
					public static class: java.lang.Class<android.support.v7.widget.ForwardingListener>;
					public onForwardingStarted(): boolean;
					public onForwardingStopped(): boolean;
					public constructor(param0: android.view.View);
					public onTouch(param0: android.view.View, param1: android.view.MotionEvent): boolean;
					public getPopup(): android.support.v7.view.menu.ShowableListMenu;
					public onViewDetachedFromWindow(param0: android.view.View): void;
					public onViewAttachedToWindow(param0: android.view.View): void;
				}
				export module ForwardingListener {
					export class DisallowIntercept {
						public static class: java.lang.Class<android.support.v7.widget.ForwardingListener.DisallowIntercept>;
						public run(): void;
					}
					export class TriggerLongPress {
						public static class: java.lang.Class<android.support.v7.widget.ForwardingListener.TriggerLongPress>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class LinearLayoutCompat {
					public static class: java.lang.Class<android.support.v7.widget.LinearLayoutCompat>;
					public static HORIZONTAL: number;
					public static VERTICAL: number;
					public static SHOW_DIVIDER_NONE: number;
					public static SHOW_DIVIDER_BEGINNING: number;
					public static SHOW_DIVIDER_MIDDLE: number;
					public static SHOW_DIVIDER_END: number;
					public getGravity(): number;
					public setShowDividers(param0: number): void;
					public onDraw(param0: android.graphics.Canvas): void;
					public getShowDividers(): number;
					public isBaselineAligned(): boolean;
					public getBaseline(): number;
					public onInitializeAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): void;
					public setBaselineAligned(param0: boolean): void;
					public getBaselineAlignedChildIndex(): number;
					public setBaselineAlignedChildIndex(param0: number): void;
					public hasDividerBeforeChildAt(param0: number): boolean;
					public isMeasureWithLargestChildEnabled(): boolean;
					public setHorizontalGravity(param0: number): void;
					public getOrientation(): number;
					public getDividerWidth(): number;
					public generateLayoutParams(param0: android.util.AttributeSet): android.support.v7.widget.LinearLayoutCompat.LayoutParams;
					public onMeasure(param0: number, param1: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public getDividerDrawable(): android.graphics.drawable.Drawable;
					public setGravity(param0: number): void;
					public onInitializeAccessibilityNodeInfo(param0: android.view.accessibility.AccessibilityNodeInfo): void;
					public setDividerDrawable(param0: android.graphics.drawable.Drawable): void;
					public setOrientation(param0: number): void;
					public generateDefaultLayoutParams(): android.support.v7.widget.LinearLayoutCompat.LayoutParams;
					public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.support.v7.widget.LinearLayoutCompat.LayoutParams;
					public setDividerPadding(param0: number): void;
					public getWeightSum(): number;
					public getDividerPadding(): number;
					public setVerticalGravity(param0: number): void;
					public setWeightSum(param0: number): void;
					public shouldDelayChildPressedState(): boolean;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public setMeasureWithLargestChildEnabled(param0: boolean): void;
				}
				export module LinearLayoutCompat {
					export class DividerMode {
						public static class: java.lang.Class<android.support.v7.widget.LinearLayoutCompat.DividerMode>;
						/**
						 * Constructs a new instance of the android.support.v7.widget.LinearLayoutCompat$DividerMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {});
						public constructor();
					}
					export class LayoutParams {
						public static class: java.lang.Class<android.support.v7.widget.LinearLayoutCompat.LayoutParams>;
						public weight: number;
						public gravity: number;
						public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public constructor(param0: android.view.ViewGroup.LayoutParams);
						public constructor(param0: android.support.v7.widget.LinearLayoutCompat.LayoutParams);
						public constructor(param0: number, param1: number, param2: number);
						public constructor(param0: number, param1: number);
					}
					export class OrientationMode {
						public static class: java.lang.Class<android.support.v7.widget.LinearLayoutCompat.OrientationMode>;
						/**
						 * Constructs a new instance of the android.support.v7.widget.LinearLayoutCompat$OrientationMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {});
						public constructor();
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ListPopupWindow extends android.support.v7.view.menu.ShowableListMenu {
					public static class: java.lang.Class<android.support.v7.widget.ListPopupWindow>;
					public static POSITION_PROMPT_ABOVE: number;
					public static POSITION_PROMPT_BELOW: number;
					public static MATCH_PARENT: number;
					public static WRAP_CONTENT: number;
					public static INPUT_METHOD_FROM_FOCUSABLE: number;
					public static INPUT_METHOD_NEEDED: number;
					public static INPUT_METHOD_NOT_NEEDED: number;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public setAnchorView(param0: android.view.View): void;
					public isShowing(): boolean;
					public setHeight(param0: number): void;
					public setForceIgnoreOutsideTouch(param0: boolean): void;
					public setPromptPosition(param0: number): void;
					public setVerticalOffset(param0: number): void;
					public onKeyPreIme(param0: number, param1: android.view.KeyEvent): boolean;
					public setPromptView(param0: android.view.View): void;
					public setContentWidth(param0: number): void;
					public isDropDownAlwaysVisible(): boolean;
					public show(): void;
					public getHeight(): number;
					public setSelection(param0: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public setSoftInputMode(param0: number): void;
					public setInputMethodMode(param0: number): void;
					public setOverlapAnchor(param0: boolean): void;
					public setAnimationStyle(param0: number): void;
					public setListSelector(param0: android.graphics.drawable.Drawable): void;
					public setHorizontalOffset(param0: number): void;
					public getSelectedView(): android.view.View;
					public getHorizontalOffset(): number;
					public getAnchorView(): android.view.View;
					public dismiss(): void;
					public setOnDismissListener(param0: android.widget.PopupWindow.OnDismissListener): void;
					public getListView(): android.widget.ListView;
					public isInputMethodNotNeeded(): boolean;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public createDragToOpenListener(param0: android.view.View): android.view.View.OnTouchListener;
					public setWindowLayoutType(param0: number): void;
					public setAdapter(param0: android.widget.ListAdapter): void;
					public getSelectedItemId(): number;
					public setDropDownAlwaysVisible(param0: boolean): void;
					public setEpicenterBounds(param0: android.graphics.Rect): void;
					public getInputMethodMode(): number;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					public setWidth(param0: number): void;
					public setOnItemSelectedListener(param0: android.widget.AdapterView.OnItemSelectedListener): void;
					public getWidth(): number;
					public getBackground(): android.graphics.drawable.Drawable;
					public getSelectedItem(): any;
					public getVerticalOffset(): number;
					public postShow(): void;
					public setOnItemClickListener(param0: android.widget.AdapterView.OnItemClickListener): void;
					public setModal(param0: boolean): void;
					public getAnimationStyle(): number;
					public constructor(param0: android.content.Context);
					public getPromptPosition(): number;
					public performItemClick(param0: number): boolean;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public isModal(): boolean;
					public clearListSelection(): void;
					public getSelectedItemPosition(): number;
					public getSoftInputMode(): number;
					public setDropDownGravity(param0: number): void;
				}
				export module ListPopupWindow {
					export class ListSelectorHider {
						public static class: java.lang.Class<android.support.v7.widget.ListPopupWindow.ListSelectorHider>;
						public run(): void;
					}
					export class PopupDataSetObserver {
						public static class: java.lang.Class<android.support.v7.widget.ListPopupWindow.PopupDataSetObserver>;
						public onChanged(): void;
						public onInvalidated(): void;
					}
					export class PopupScrollListener {
						public static class: java.lang.Class<android.support.v7.widget.ListPopupWindow.PopupScrollListener>;
						public onScroll(param0: android.widget.AbsListView, param1: number, param2: number, param3: number): void;
						public onScrollStateChanged(param0: android.widget.AbsListView, param1: number): void;
					}
					export class PopupTouchInterceptor {
						public static class: java.lang.Class<android.support.v7.widget.ListPopupWindow.PopupTouchInterceptor>;
						public onTouch(param0: android.view.View, param1: android.view.MotionEvent): boolean;
					}
					export class ResizePopupRunnable {
						public static class: java.lang.Class<android.support.v7.widget.ListPopupWindow.ResizePopupRunnable>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class MenuItemHoverListener {
					public static class: java.lang.Class<android.support.v7.widget.MenuItemHoverListener>;
					/**
					 * Constructs a new instance of the android.support.v7.widget.MenuItemHoverListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onItemHoverExit(param0: android.support.v7.view.menu.MenuBuilder, param1: android.view.MenuItem): void; onItemHoverEnter(param0: android.support.v7.view.menu.MenuBuilder, param1: android.view.MenuItem): void });
					public constructor();
					public onItemHoverEnter(param0: android.support.v7.view.menu.MenuBuilder, param1: android.view.MenuItem): void;
					public onItemHoverExit(param0: android.support.v7.view.menu.MenuBuilder, param1: android.view.MenuItem): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class MenuPopupWindow extends android.support.v7.widget.ListPopupWindow implements android.support.v7.widget.MenuItemHoverListener {
					public static class: java.lang.Class<android.support.v7.widget.MenuPopupWindow>;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public show(): void;
					public isShowing(): boolean;
					public setTouchModal(param0: boolean): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public onItemHoverEnter(param0: android.support.v7.view.menu.MenuBuilder, param1: android.view.MenuItem): void;
					public setEnterTransition(param0: any): void;
					public setExitTransition(param0: any): void;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public setHoverListener(param0: android.support.v7.widget.MenuItemHoverListener): void;
					public onItemHoverExit(param0: android.support.v7.view.menu.MenuBuilder, param1: android.view.MenuItem): void;
					public dismiss(): void;
					public getListView(): android.widget.ListView;
				}
				export module MenuPopupWindow {
					export class MenuDropDownListView extends android.support.v7.widget.DropDownListView {
						public static class: java.lang.Class<android.support.v7.widget.MenuPopupWindow.MenuDropDownListView>;
						public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
						public onHoverEvent(param0: android.view.MotionEvent): boolean;
						public constructor(param0: android.content.Context, param1: boolean);
						public setHoverListener(param0: android.support.v7.widget.MenuItemHoverListener): void;
						public clearSelection(): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class PopupMenu {
					public static class: java.lang.Class<android.support.v7.widget.PopupMenu>;
					public inflate(param0: number): void;
					public getGravity(): number;
					public setOnMenuItemClickListener(param0: android.support.v7.widget.PopupMenu.OnMenuItemClickListener): void;
					public show(): void;
					public setGravity(param0: number): void;
					public setOnDismissListener(param0: android.support.v7.widget.PopupMenu.OnDismissListener): void;
					public getDragToOpenListener(): android.view.View.OnTouchListener;
					public getMenuInflater(): android.view.MenuInflater;
					public getMenu(): android.view.Menu;
					public constructor(param0: android.content.Context, param1: android.view.View, param2: number);
					public constructor(param0: android.content.Context, param1: android.view.View, param2: number, param3: number, param4: number);
					public constructor(param0: android.content.Context, param1: android.view.View);
					public dismiss(): void;
				}
				export module PopupMenu {
					export class OnDismissListener {
						public static class: java.lang.Class<android.support.v7.widget.PopupMenu.OnDismissListener>;
						/**
						 * Constructs a new instance of the android.support.v7.widget.PopupMenu$OnDismissListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onDismiss(param0: android.support.v7.widget.PopupMenu): void });
						public constructor();
						public onDismiss(param0: android.support.v7.widget.PopupMenu): void;
					}
					export class OnMenuItemClickListener {
						public static class: java.lang.Class<android.support.v7.widget.PopupMenu.OnMenuItemClickListener>;
						/**
						 * Constructs a new instance of the android.support.v7.widget.PopupMenu$OnMenuItemClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onMenuItemClick(param0: android.view.MenuItem): boolean });
						public constructor();
						public onMenuItemClick(param0: android.view.MenuItem): boolean;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ResourcesWrapper {
					public static class: java.lang.Class<android.support.v7.widget.ResourcesWrapper>;
					public getQuantityString(param0: number, param1: number): string;
					public getInteger(param0: number): number;
					public updateConfiguration(param0: android.content.res.Configuration, param1: android.util.DisplayMetrics): void;
					public getIntArray(param0: number): androidNative.Array<number>;
					public getText(param0: number): string;
					public getLayout(param0: number): android.content.res.XmlResourceParser;
					public getValue(param0: number, param1: android.util.TypedValue, param2: boolean): void;
					public getDimensionPixelSize(param0: number): number;
					public getColorStateList(param0: number): android.content.res.ColorStateList;
					public obtainAttributes(param0: android.util.AttributeSet, param1: androidNative.Array<number>): android.content.res.TypedArray;
					public openRawResourceFd(param0: number): android.content.res.AssetFileDescriptor;
					public openRawResource(param0: number, param1: android.util.TypedValue): java.io.InputStream;
					public getFraction(param0: number, param1: number, param2: number): number;
					public getStringArray(param0: number): androidNative.Array<string>;
					public getValue(param0: string, param1: android.util.TypedValue, param2: boolean): void;
					public getResourceTypeName(param0: number): string;
					public getIdentifier(param0: string, param1: string, param2: string): number;
					public getDrawableForDensity(param0: number, param1: number, param2: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
					public getString(param0: number, param1: androidNative.Array<any>): string;
					public getDimensionPixelOffset(param0: number): number;
					public getXml(param0: number): android.content.res.XmlResourceParser;
					public getQuantityText(param0: number, param1: number): string;
					public getDrawable(param0: number): android.graphics.drawable.Drawable;
					public getDisplayMetrics(): android.util.DisplayMetrics;
					public getDrawableForDensity(param0: number, param1: number): android.graphics.drawable.Drawable;
					public openRawResource(param0: number): java.io.InputStream;
					public constructor(param0: android.content.res.Resources);
					public getString(param0: number): string;
					public getConfiguration(): android.content.res.Configuration;
					public getAnimation(param0: number): android.content.res.XmlResourceParser;
					public parseBundleExtras(param0: android.content.res.XmlResourceParser, param1: android.os.Bundle): void;
					public getResourceEntryName(param0: number): string;
					public getDrawable(param0: number, param1: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
					public getQuantityString(param0: number, param1: number, param2: androidNative.Array<any>): string;
					public parseBundleExtra(param0: string, param1: android.util.AttributeSet, param2: android.os.Bundle): void;
					public getMovie(param0: number): android.graphics.Movie;
					public getColor(param0: number): number;
					public getTextArray(param0: number): androidNative.Array<string>;
					public getBoolean(param0: number): boolean;
					public obtainTypedArray(param0: number): android.content.res.TypedArray;
					public getText(param0: number, param1: string): string;
					public getDimension(param0: number): number;
					public getResourcePackageName(param0: number): string;
					public getValueForDensity(param0: number, param1: number, param2: android.util.TypedValue, param3: boolean): void;
					public getResourceName(param0: number): string;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class RtlSpacingHelper {
					public static class: java.lang.Class<android.support.v7.widget.RtlSpacingHelper>;
					public static UNDEFINED: number;
					public getRight(): number;
					public getEnd(): number;
					public setRelative(param0: number, param1: number): void;
					public getLeft(): number;
					public setDirection(param0: boolean): void;
					public getStart(): number;
					public setAbsolute(param0: number, param1: number): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ScrollingTabContainerView {
					public static class: java.lang.Class<android.support.v7.widget.ScrollingTabContainerView>;
					public mVisibilityAnim: android.view.ViewPropertyAnimator;
					public mVisAnimListener: android.support.v7.widget.ScrollingTabContainerView.VisibilityAnimListener;
					public onDetachedFromWindow(): void;
					public onMeasure(param0: number, param1: number): void;
					public addTab(param0: android.support.v7.app.ActionBar.Tab, param1: number, param2: boolean): void;
					public animateToTab(param0: number): void;
					public addTab(param0: android.support.v7.app.ActionBar.Tab, param1: boolean): void;
					public onAttachedToWindow(): void;
					public setAllowCollapse(param0: boolean): void;
					public removeTabAt(param0: number): void;
					public constructor(param0: android.content.Context);
					public updateTab(param0: number): void;
					public setContentHeight(param0: number): void;
					public animateToVisibility(param0: number): void;
					public removeAllTabs(): void;
					public setTabSelected(param0: number): void;
					public onNothingSelected(param0: android.widget.AdapterView<any>): void;
					public onItemSelected(param0: android.widget.AdapterView<any>, param1: android.view.View, param2: number, param3: number): void;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
				}
				export module ScrollingTabContainerView {
					export class TabAdapter {
						public static class: java.lang.Class<android.support.v7.widget.ScrollingTabContainerView.TabAdapter>;
						public getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
						public getItemId(param0: number): number;
						public getCount(): number;
						public getItem(param0: number): any;
					}
					export class TabClickListener {
						public static class: java.lang.Class<android.support.v7.widget.ScrollingTabContainerView.TabClickListener>;
						public onClick(param0: android.view.View): void;
					}
					export class TabView {
						public static class: java.lang.Class<android.support.v7.widget.ScrollingTabContainerView.TabView>;
						public getTab(): android.support.v7.app.ActionBar.Tab;
						public setSelected(param0: boolean): void;
						public update(): void;
						public onInitializeAccessibilityNodeInfo(param0: android.view.accessibility.AccessibilityNodeInfo): void;
						public bindTab(param0: android.support.v7.app.ActionBar.Tab): void;
						public onInitializeAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): void;
						public onMeasure(param0: number, param1: number): void;
						public constructor(param0: android.support.v7.widget.ScrollingTabContainerView, param1: android.content.Context, param2: android.support.v7.app.ActionBar.Tab, param3: boolean);
					}
					export class VisibilityAnimListener {
						public static class: java.lang.Class<android.support.v7.widget.ScrollingTabContainerView.VisibilityAnimListener>;
						public constructor(param0: android.support.v7.widget.ScrollingTabContainerView);
						public onAnimationEnd(param0: android.animation.Animator): void;
						public onAnimationCancel(param0: android.animation.Animator): void;
						public onAnimationStart(param0: android.animation.Animator): void;
						public withFinalVisibility(param0: android.view.ViewPropertyAnimator, param1: number): android.support.v7.widget.ScrollingTabContainerView.VisibilityAnimListener;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class SearchView extends android.support.v7.widget.LinearLayoutCompat implements android.support.v7.view.CollapsibleActionView {
					public static class: java.lang.Class<android.support.v7.widget.SearchView>;
					public setQuery(param0: string, param1: boolean): void;
					public getMaxWidth(): number;
					public setOnQueryTextListener(param0: android.support.v7.widget.SearchView.OnQueryTextListener): void;
					public onActionViewCollapsed(): void;
					public onActionViewExpanded(): void;
					public setOnQueryTextFocusChangeListener(param0: android.view.View.OnFocusChangeListener): void;
					public getQueryHint(): string;
					public setQueryHint(param0: string): void;
					public setIconifiedByDefault(param0: boolean): void;
					public setSuggestionsAdapter(param0: android.support.v4.widget.CursorAdapter): void;
					public setIconified(param0: boolean): void;
					public setOnCloseListener(param0: android.support.v7.widget.SearchView.OnCloseListener): void;
					public requestFocus(param0: number, param1: android.graphics.Rect): boolean;
					public onDetachedFromWindow(): void;
					public setAppSearchData(param0: android.os.Bundle): void;
					public onMeasure(param0: number, param1: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setOnSearchClickListener(param0: android.view.View.OnClickListener): void;
					public setMaxWidth(param0: number): void;
					public setSubmitButtonEnabled(param0: boolean): void;
					public setQueryRefinementEnabled(param0: boolean): void;
					public getSuggestionsAdapter(): android.support.v4.widget.CursorAdapter;
					public onRestoreInstanceState(param0: android.os.Parcelable): void;
					public setSearchableInfo(param0: android.app.SearchableInfo): void;
					public setOnSuggestionListener(param0: android.support.v7.widget.SearchView.OnSuggestionListener): void;
					public isIconfiedByDefault(): boolean;
					public setInputType(param0: number): void;
					public constructor(param0: android.content.Context);
					public setImeOptions(param0: number): void;
					public isSubmitButtonEnabled(): boolean;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public getQuery(): string;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public clearFocus(): void;
					public onWindowFocusChanged(param0: boolean): void;
					public getImeOptions(): number;
					public isIconified(): boolean;
					public getInputType(): number;
					public isQueryRefinementEnabled(): boolean;
					public onSaveInstanceState(): android.os.Parcelable;
				}
				export module SearchView {
					export class AutoCompleteTextViewReflector {
						public static class: java.lang.Class<android.support.v7.widget.SearchView.AutoCompleteTextViewReflector>;
					}
					export class OnCloseListener {
						public static class: java.lang.Class<android.support.v7.widget.SearchView.OnCloseListener>;
						/**
						 * Constructs a new instance of the android.support.v7.widget.SearchView$OnCloseListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onClose(): boolean });
						public constructor();
						public onClose(): boolean;
					}
					export class OnQueryTextListener {
						public static class: java.lang.Class<android.support.v7.widget.SearchView.OnQueryTextListener>;
						/**
						 * Constructs a new instance of the android.support.v7.widget.SearchView$OnQueryTextListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onQueryTextSubmit(param0: string): boolean; onQueryTextChange(param0: string): boolean });
						public constructor();
						public onQueryTextChange(param0: string): boolean;
						public onQueryTextSubmit(param0: string): boolean;
					}
					export class OnSuggestionListener {
						public static class: java.lang.Class<android.support.v7.widget.SearchView.OnSuggestionListener>;
						/**
						 * Constructs a new instance of the android.support.v7.widget.SearchView$OnSuggestionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onSuggestionSelect(param0: number): boolean; onSuggestionClick(param0: number): boolean });
						public constructor();
						public onSuggestionSelect(param0: number): boolean;
						public onSuggestionClick(param0: number): boolean;
					}
					export class SavedState {
						public static class: java.lang.Class<android.support.v7.widget.SearchView.SavedState>;
						public static CREATOR: android.os.Parcelable.Creator<android.support.v7.widget.SearchView.SavedState>;
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public constructor(param0: android.os.Parcel, param1: java.lang.ClassLoader);
						public toString(): string;
					}
					export class SearchAutoComplete extends android.support.v7.widget.AppCompatAutoCompleteTextView {
						public static class: java.lang.Class<android.support.v7.widget.SearchView.SearchAutoComplete>;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public enoughToFilter(): boolean;
						public setThreshold(param0: number): void;
						public onCreateInputConnection(param0: android.view.inputmethod.EditorInfo): android.view.inputmethod.InputConnection;
						public onWindowFocusChanged(param0: boolean): void;
						public onFinishInflate(): void;
						public replaceText(param0: string): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public performCompletion(): void;
						public onKeyPreIme(param0: number, param1: android.view.KeyEvent): boolean;
						public onFocusChanged(param0: boolean, param1: number, param2: android.graphics.Rect): void;
						public constructor(param0: android.content.Context);
					}
					export class UpdatableTouchDelegate {
						public static class: java.lang.Class<android.support.v7.widget.SearchView.UpdatableTouchDelegate>;
						public onTouchEvent(param0: android.view.MotionEvent): boolean;
						public constructor(param0: android.graphics.Rect, param1: android.graphics.Rect, param2: android.view.View);
						public setBounds(param0: android.graphics.Rect, param1: android.graphics.Rect): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ShareActionProvider {
					public static class: java.lang.Class<android.support.v7.widget.ShareActionProvider>;
					public static DEFAULT_SHARE_HISTORY_FILE_NAME: string;
					public setShareIntent(param0: android.content.Intent): void;
					public constructor(param0: android.content.Context);
					public onCreateActionView(): android.view.View;
					public hasSubMenu(): boolean;
					public setOnShareTargetSelectedListener(param0: android.support.v7.widget.ShareActionProvider.OnShareTargetSelectedListener): void;
					public setShareHistoryFileName(param0: string): void;
					public onPrepareSubMenu(param0: android.view.SubMenu): void;
				}
				export module ShareActionProvider {
					export class OnShareTargetSelectedListener {
						public static class: java.lang.Class<android.support.v7.widget.ShareActionProvider.OnShareTargetSelectedListener>;
						/**
						 * Constructs a new instance of the android.support.v7.widget.ShareActionProvider$OnShareTargetSelectedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onShareTargetSelected(param0: android.support.v7.widget.ShareActionProvider, param1: android.content.Intent): boolean });
						public constructor();
						public onShareTargetSelected(param0: android.support.v7.widget.ShareActionProvider, param1: android.content.Intent): boolean;
					}
					export class ShareActivityChooserModelPolicy extends android.support.v7.widget.ActivityChooserModel.OnChooseActivityListener {
						public static class: java.lang.Class<android.support.v7.widget.ShareActionProvider.ShareActivityChooserModelPolicy>;
						public onChooseActivity(param0: android.support.v7.widget.ActivityChooserModel, param1: android.content.Intent): boolean;
					}
					export class ShareMenuItemOnMenuItemClickListener {
						public static class: java.lang.Class<android.support.v7.widget.ShareActionProvider.ShareMenuItemOnMenuItemClickListener>;
						public onMenuItemClick(param0: android.view.MenuItem): boolean;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class SuggestionsAdapter {
					public static class: java.lang.Class<android.support.v7.widget.SuggestionsAdapter>;
					public constructor(param0: android.content.Context, param1: android.support.v7.widget.SearchView, param2: android.app.SearchableInfo, param3: java.util.WeakHashMap<string, android.graphics.drawable.Drawable.ConstantState>);
					public getQueryRefinement(): number;
					public notifyDataSetInvalidated(): void;
					public getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
					public setQueryRefinement(param0: number): void;
					public onClick(param0: android.view.View): void;
					public notifyDataSetChanged(): void;
					public newView(param0: android.content.Context, param1: android.database.Cursor, param2: android.view.ViewGroup): android.view.View;
					public changeCursor(param0: android.database.Cursor): void;
					public getDropDownView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
					public hasStableIds(): boolean;
					public bindView(param0: android.view.View, param1: android.content.Context, param2: android.database.Cursor): void;
					public runQueryOnBackgroundThread(param0: string): android.database.Cursor;
					public static getColumnString(param0: android.database.Cursor, param1: string): string;
					public close(): void;
					public convertToString(param0: android.database.Cursor): string;
				}
				export module SuggestionsAdapter {
					export class ChildViewCache {
						public static class: java.lang.Class<android.support.v7.widget.SuggestionsAdapter.ChildViewCache>;
						public mText1: android.widget.TextView;
						public mText2: android.widget.TextView;
						public mIcon1: android.widget.ImageView;
						public mIcon2: android.widget.ImageView;
						public mIconRefine: android.widget.ImageView;
						public constructor(param0: android.view.View);
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class SwitchCompat {
					public static class: java.lang.Class<android.support.v7.widget.SwitchCompat>;
					public getSplitTrack(): boolean;
					public onDraw(param0: android.graphics.Canvas): void;
					public getCompoundPaddingLeft(): number;
					public setSplitTrack(param0: boolean): void;
					public jumpDrawablesToCurrentState(): void;
					public setThumbTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public setTrackResource(param0: number): void;
					public getTrackDrawable(): android.graphics.drawable.Drawable;
					public setTextOff(param0: string): void;
					public setChecked(param0: boolean): void;
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
					public setTrackTintMode(param0: android.graphics.PorterDuff.Mode): void;
					public setSwitchTypeface(param0: android.graphics.Typeface): void;
					public onPopulateAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): void;
					public setThumbTintList(param0: android.content.res.ColorStateList): void;
					public getTextOff(): string;
					public getTrackTintMode(): android.graphics.PorterDuff.Mode;
					public getTrackTintList(): android.content.res.ColorStateList;
					public getThumbDrawable(): android.graphics.drawable.Drawable;
					public getCompoundPaddingRight(): number;
					public drawableStateChanged(): void;
					public setTextOn(param0: string): void;
					public setSwitchMinWidth(param0: number): void;
					public getSwitchMinWidth(): number;
					public setThumbTextPadding(param0: number): void;
					public getTextOn(): string;
					public onInitializeAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): void;
					public verifyDrawable(param0: android.graphics.drawable.Drawable): boolean;
					public getThumbTextPadding(): number;
					public getThumbTintList(): android.content.res.ColorStateList;
					public setThumbDrawable(param0: android.graphics.drawable.Drawable): void;
					public setCustomSelectionActionModeCallback(param0: android.view.ActionMode.Callback): void;
					public setShowText(param0: boolean): void;
					public getShowText(): boolean;
					public draw(param0: android.graphics.Canvas): void;
					public getThumbTintMode(): android.graphics.PorterDuff.Mode;
					public onMeasure(param0: number, param1: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public onInitializeAccessibilityNodeInfo(param0: android.view.accessibility.AccessibilityNodeInfo): void;
					public toggle(): void;
					public drawableHotspotChanged(param0: number, param1: number): void;
					public setTrackDrawable(param0: android.graphics.drawable.Drawable): void;
					public setSwitchTextAppearance(param0: android.content.Context, param1: number): void;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public getSwitchPadding(): number;
					public setSwitchTypeface(param0: android.graphics.Typeface, param1: number): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public setSwitchPadding(param0: number): void;
					public setThumbResource(param0: number): void;
					public onCreateDrawableState(param0: number): androidNative.Array<number>;
					public setTrackTintList(param0: android.content.res.ColorStateList): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ThemeUtils {
					public static class: java.lang.Class<android.support.v7.widget.ThemeUtils>;
					public static getThemeAttrColor(param0: android.content.Context, param1: number): number;
					public static createDisabledStateList(param0: number, param1: number): android.content.res.ColorStateList;
					public static getThemeAttrColorStateList(param0: android.content.Context, param1: number): android.content.res.ColorStateList;
					public static getDisabledThemeAttrColor(param0: android.content.Context, param1: number): number;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ThemedSpinnerAdapter {
					public static class: java.lang.Class<android.support.v7.widget.ThemedSpinnerAdapter>;
					/**
					 * Constructs a new instance of the android.support.v7.widget.ThemedSpinnerAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { setDropDownViewTheme(param0: android.content.res.Resources.Theme): void; getDropDownViewTheme(): android.content.res.Resources.Theme });
					public constructor();
					public setDropDownViewTheme(param0: android.content.res.Resources.Theme): void;
					public getDropDownViewTheme(): android.content.res.Resources.Theme;
				}
				export module ThemedSpinnerAdapter {
					export class Helper {
						public static class: java.lang.Class<android.support.v7.widget.ThemedSpinnerAdapter.Helper>;
						public getDropDownViewInflater(): android.view.LayoutInflater;
						public setDropDownViewTheme(param0: android.content.res.Resources.Theme): void;
						public constructor(param0: android.content.Context);
						public getDropDownViewTheme(): android.content.res.Resources.Theme;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class TintContextWrapper {
					public static class: java.lang.Class<android.support.v7.widget.TintContextWrapper>;
					public getAssets(): android.content.res.AssetManager;
					public getTheme(): android.content.res.Resources.Theme;
					public getResources(): android.content.res.Resources;
					public static wrap(param0: android.content.Context): android.content.Context;
					public setTheme(param0: number): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class TintInfo {
					public static class: java.lang.Class<android.support.v7.widget.TintInfo>;
					public mTintList: android.content.res.ColorStateList;
					public mTintMode: android.graphics.PorterDuff.Mode;
					public mHasTintMode: boolean;
					public mHasTintList: boolean;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class TintResources extends android.support.v7.widget.ResourcesWrapper {
					public static class: java.lang.Class<android.support.v7.widget.TintResources>;
					public getDrawable(param0: number, param1: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
					public getDrawable(param0: number): android.graphics.drawable.Drawable;
					public constructor(param0: android.content.res.Resources);
					public constructor(param0: android.content.Context, param1: android.content.res.Resources);
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class TintTypedArray {
					public static class: java.lang.Class<android.support.v7.widget.TintTypedArray>;
					public getNonResourceString(param0: number): string;
					public recycle(): void;
					public getDimension(param0: number, param1: number): number;
					public getFraction(param0: number, param1: number, param2: number, param3: number): number;
					public getText(param0: number): string;
					public getColor(param0: number, param1: number): number;
					public getColorStateList(param0: number): android.content.res.ColorStateList;
					public getDimensionPixelSize(param0: number, param1: number): number;
					public getChangingConfigurations(): number;
					public getResources(): android.content.res.Resources;
					public hasValue(param0: number): boolean;
					public getDimensionPixelOffset(param0: number, param1: number): number;
					public getType(param0: number): number;
					public getLayoutDimension(param0: number, param1: string): number;
					public static obtainStyledAttributes(param0: android.content.Context, param1: android.util.AttributeSet, param2: androidNative.Array<number>): android.support.v7.widget.TintTypedArray;
					public getFont(param0: number, param1: number, param2: android.support.v4.content.res.ResourcesCompat.FontCallback): android.graphics.Typeface;
					public getResourceId(param0: number, param1: number): number;
					public getValue(param0: number, param1: android.util.TypedValue): boolean;
					public getDrawable(param0: number): android.graphics.drawable.Drawable;
					public static obtainStyledAttributes(param0: android.content.Context, param1: number, param2: androidNative.Array<number>): android.support.v7.widget.TintTypedArray;
					public getInteger(param0: number, param1: number): number;
					public getDrawableIfKnown(param0: number): android.graphics.drawable.Drawable;
					public peekValue(param0: number): android.util.TypedValue;
					public getString(param0: number): string;
					public getIndex(param0: number): number;
					public getBoolean(param0: number, param1: boolean): boolean;
					public length(): number;
					public getIndexCount(): number;
					public getPositionDescription(): string;
					public getTextArray(param0: number): androidNative.Array<string>;
					public static obtainStyledAttributes(param0: android.content.Context, param1: android.util.AttributeSet, param2: androidNative.Array<number>, param3: number, param4: number): android.support.v7.widget.TintTypedArray;
					public getInt(param0: number, param1: number): number;
					public getFloat(param0: number, param1: number): number;
					public getLayoutDimension(param0: number, param1: number): number;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class Toolbar {
					public static class: java.lang.Class<android.support.v7.widget.Toolbar>;
					public setLogo(param0: number): void;
					public getTitle(): string;
					public setTitle(param0: string): void;
					public onHoverEvent(param0: android.view.MotionEvent): boolean;
					public getTitleMarginBottom(): number;
					public setLogoDescription(param0: number): void;
					public getCurrentContentInsetEnd(): number;
					public getCurrentContentInsetLeft(): number;
					public getContentInsetLeft(): number;
					public generateLayoutParams(param0: android.util.AttributeSet): android.support.v7.widget.Toolbar.LayoutParams;
					public setContentInsetStartWithNavigation(param0: number): void;
					public setTitleTextAppearance(param0: android.content.Context, param1: number): void;
					public setOverflowIcon(param0: android.graphics.drawable.Drawable): void;
					public setOnMenuItemClickListener(param0: android.support.v7.widget.Toolbar.OnMenuItemClickListener): void;
					public setLogoDescription(param0: string): void;
					public hideOverflowMenu(): boolean;
					public setMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: android.support.v7.widget.ActionMenuPresenter): void;
					public setCollapsible(param0: boolean): void;
					public getNavigationIcon(): android.graphics.drawable.Drawable;
					public canShowOverflowMenu(): boolean;
					public getTitleMarginTop(): number;
					public setSubtitleTextColor(param0: number): void;
					public setTitleMarginEnd(param0: number): void;
					public isOverflowMenuShowPending(): boolean;
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
					public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.support.v7.widget.Toolbar.LayoutParams;
					public inflateMenu(param0: number): void;
					public setContentInsetsRelative(param0: number, param1: number): void;
					public getContentInsetStartWithNavigation(): number;
					public getNavigationContentDescription(): string;
					public isTitleTruncated(): boolean;
					public setTitle(param0: number): void;
					public setLogo(param0: android.graphics.drawable.Drawable): void;
					public setNavigationIcon(param0: android.graphics.drawable.Drawable): void;
					public setSubtitleTextAppearance(param0: android.content.Context, param1: number): void;
					public hasExpandedActionView(): boolean;
					public isOverflowMenuShowing(): boolean;
					public showOverflowMenu(): boolean;
					public onSaveInstanceState(): android.os.Parcelable;
					public setTitleMargin(param0: number, param1: number, param2: number, param3: number): void;
					public getOverflowIcon(): android.graphics.drawable.Drawable;
					public getContentInsetEnd(): number;
					public getCurrentContentInsetRight(): number;
					public setMenuCallbacks(param0: android.support.v7.view.menu.MenuPresenter.Callback, param1: android.support.v7.view.menu.MenuBuilder.Callback): void;
					public getContentInsetRight(): number;
					public setTitleMarginBottom(param0: number): void;
					public setPopupTheme(param0: number): void;
					public getPopupTheme(): number;
					public setNavigationContentDescription(param0: number): void;
					public getCurrentContentInsetStart(): number;
					public setContentInsetEndWithActions(param0: number): void;
					public setSubtitle(param0: number): void;
					public getContentInsetEndWithActions(): number;
					public getLogo(): android.graphics.drawable.Drawable;
					public getMenu(): android.view.Menu;
					public getWrapper(): android.support.v7.widget.DecorToolbar;
					public setNavigationOnClickListener(param0: android.view.View.OnClickListener): void;
					public getContentInsetStart(): number;
					public setTitleMarginStart(param0: number): void;
					public setNavigationIcon(param0: number): void;
					public onDetachedFromWindow(): void;
					public onRtlPropertiesChanged(param0: number): void;
					public onMeasure(param0: number, param1: number): void;
					public generateDefaultLayoutParams(): android.support.v7.widget.Toolbar.LayoutParams;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public dismissPopupMenus(): void;
					public collapseActionView(): void;
					public setTitleTextColor(param0: number): void;
					public setTitleMarginTop(param0: number): void;
					public onRestoreInstanceState(param0: android.os.Parcelable): void;
					public getTitleMarginStart(): number;
					public constructor(param0: android.content.Context);
					public getLogoDescription(): string;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public setNavigationContentDescription(param0: string): void;
					public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;
					public setSubtitle(param0: string): void;
					public getSubtitle(): string;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public getTitleMarginEnd(): number;
					public setContentInsetsAbsolute(param0: number, param1: number): void;
				}
				export module Toolbar {
					export class ExpandedActionViewMenuPresenter extends android.support.v7.view.menu.MenuPresenter {
						public static class: java.lang.Class<android.support.v7.widget.Toolbar.ExpandedActionViewMenuPresenter>;
						public onCloseMenu(param0: android.support.v7.view.menu.MenuBuilder, param1: boolean): void;
						public getMenuView(param0: android.view.ViewGroup): android.support.v7.view.menu.MenuView;
						public flagActionItems(): boolean;
						public onSaveInstanceState(): android.os.Parcelable;
						public collapseItemActionView(param0: android.support.v7.view.menu.MenuBuilder, param1: android.support.v7.view.menu.MenuItemImpl): boolean;
						public updateMenuView(param0: boolean): void;
						public initForMenu(param0: android.content.Context, param1: android.support.v7.view.menu.MenuBuilder): void;
						public setCallback(param0: android.support.v7.view.menu.MenuPresenter.Callback): void;
						public onSubMenuSelected(param0: android.support.v7.view.menu.SubMenuBuilder): boolean;
						public onRestoreInstanceState(param0: android.os.Parcelable): void;
						public expandItemActionView(param0: android.support.v7.view.menu.MenuBuilder, param1: android.support.v7.view.menu.MenuItemImpl): boolean;
						public getId(): number;
					}
					export class LayoutParams extends android.support.v7.app.ActionBar.LayoutParams {
						public static class: java.lang.Class<android.support.v7.widget.Toolbar.LayoutParams>;
						public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public constructor(param0: android.view.ViewGroup.LayoutParams);
						public constructor(param0: android.support.v7.widget.Toolbar.LayoutParams);
						public constructor(param0: number);
						public constructor(param0: android.support.v7.app.ActionBar.LayoutParams);
						public constructor(param0: number, param1: number, param2: number);
						public constructor(param0: number, param1: number);
					}
					export class OnMenuItemClickListener {
						public static class: java.lang.Class<android.support.v7.widget.Toolbar.OnMenuItemClickListener>;
						/**
						 * Constructs a new instance of the android.support.v7.widget.Toolbar$OnMenuItemClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onMenuItemClick(param0: android.view.MenuItem): boolean });
						public constructor();
						public onMenuItemClick(param0: android.view.MenuItem): boolean;
					}
					export class SavedState {
						public static class: java.lang.Class<android.support.v7.widget.Toolbar.SavedState>;
						public static CREATOR: android.os.Parcelable.Creator<android.support.v7.widget.Toolbar.SavedState>;
						public constructor(param0: android.os.Parcelable);
						public constructor(param0: android.os.Parcel);
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public constructor(param0: android.os.Parcel, param1: java.lang.ClassLoader);
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ToolbarWidgetWrapper extends android.support.v7.widget.DecorToolbar {
					public static class: java.lang.Class<android.support.v7.widget.ToolbarWidgetWrapper>;
					public getTitle(): string;
					public setLogo(param0: number): void;
					public getNavigationMode(): number;
					public setTitle(param0: string): void;
					public setDropdownParams(param0: android.widget.SpinnerAdapter, param1: android.widget.AdapterView.OnItemSelectedListener): void;
					public saveHierarchyState(param0: android.util.SparseArray<android.os.Parcelable>): void;
					public setMenu(param0: android.view.Menu, param1: android.support.v7.view.menu.MenuPresenter.Callback): void;
					public setDefaultNavigationContentDescription(param0: number): void;
					public getCustomView(): android.view.View;
					public hideOverflowMenu(): boolean;
					public getVisibility(): number;
					public setCollapsible(param0: boolean): void;
					public setWindowCallback(param0: android.view.Window.Callback): void;
					public setIcon(param0: android.graphics.drawable.Drawable): void;
					public canShowOverflowMenu(): boolean;
					public setupAnimatorToVisibility(param0: number, param1: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public isOverflowMenuShowPending(): boolean;
					public getHeight(): number;
					public getViewGroup(): android.view.ViewGroup;
					public setDefaultNavigationIcon(param0: android.graphics.drawable.Drawable): void;
					public hasLogo(): boolean;
					public setMenuPrepared(): void;
					public setDisplayOptions(param0: number): void;
					public getDropdownItemCount(): number;
					public isTitleTruncated(): boolean;
					public constructor(param0: android.support.v7.widget.Toolbar, param1: boolean);
					public setLogo(param0: android.graphics.drawable.Drawable): void;
					public setNavigationIcon(param0: android.graphics.drawable.Drawable): void;
					public setIcon(param0: number): void;
					public animateToVisibility(param0: number): void;
					public setVisibility(param0: number): void;
					public initProgress(): void;
					public setCustomView(param0: android.view.View): void;
					public hasExpandedActionView(): boolean;
					public isOverflowMenuShowing(): boolean;
					public showOverflowMenu(): boolean;
					public setDropdownSelectedPosition(param0: number): void;
					public setEmbeddedTabView(param0: android.support.v7.widget.ScrollingTabContainerView): void;
					public setMenuCallbacks(param0: android.support.v7.view.menu.MenuPresenter.Callback, param1: android.support.v7.view.menu.MenuBuilder.Callback): void;
					public setNavigationContentDescription(param0: number): void;
					public getContext(): android.content.Context;
					public getMenu(): android.view.Menu;
					public getDropdownSelectedPosition(): number;
					public setNavigationIcon(param0: number): void;
					public dismissPopupMenus(): void;
					public collapseActionView(): void;
					public setNavigationMode(param0: number): void;
					public setBackgroundDrawable(param0: android.graphics.drawable.Drawable): void;
					public initIndeterminateProgress(): void;
					public restoreHierarchyState(param0: android.util.SparseArray<android.os.Parcelable>): void;
					public constructor(param0: android.support.v7.widget.Toolbar, param1: boolean, param2: number, param3: number);
					public setNavigationContentDescription(param0: string): void;
					public setSubtitle(param0: string): void;
					public hasEmbeddedTabs(): boolean;
					public getSubtitle(): string;
					public getDisplayOptions(): number;
					public hasIcon(): boolean;
					public setHomeButtonEnabled(param0: boolean): void;
					public setWindowTitle(param0: string): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class TooltipCompat {
					public static class: java.lang.Class<android.support.v7.widget.TooltipCompat>;
					public static setTooltipText(param0: android.view.View, param1: string): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class TooltipCompatHandler {
					public static class: java.lang.Class<android.support.v7.widget.TooltipCompatHandler>;
					public onLongClick(param0: android.view.View): boolean;
					public static setTooltipText(param0: android.view.View, param1: string): void;
					public onHover(param0: android.view.View, param1: android.view.MotionEvent): boolean;
					public onViewDetachedFromWindow(param0: android.view.View): void;
					public onViewAttachedToWindow(param0: android.view.View): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class TooltipPopup {
					public static class: java.lang.Class<android.support.v7.widget.TooltipPopup>;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class VectorEnabledTintResources {
					public static class: java.lang.Class<android.support.v7.widget.VectorEnabledTintResources>;
					public static MAX_SDK_WHERE_REQUIRED: number;
					public getDrawable(param0: number): android.graphics.drawable.Drawable;
					public static shouldBeUsed(): boolean;
					public static isCompatVectorFromResourcesEnabled(): boolean;
					public static setCompatVectorFromResourcesEnabled(param0: boolean): void;
					public constructor(param0: android.content.Context, param1: android.content.res.Resources);
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ViewStubCompat {
					public static class: java.lang.Class<android.support.v7.widget.ViewStubCompat>;
					public onMeasure(param0: number, param1: number): void;
					public setOnInflateListener(param0: android.support.v7.widget.ViewStubCompat.OnInflateListener): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setInflatedId(param0: number): void;
					public getInflatedId(): number;
					public setLayoutInflater(param0: android.view.LayoutInflater): void;
					public getLayoutInflater(): android.view.LayoutInflater;
					public inflate(): android.view.View;
					public setLayoutResource(param0: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public setVisibility(param0: number): void;
					public getLayoutResource(): number;
					public dispatchDraw(param0: android.graphics.Canvas): void;
					public draw(param0: android.graphics.Canvas): void;
				}
				export module ViewStubCompat {
					export class OnInflateListener {
						public static class: java.lang.Class<android.support.v7.widget.ViewStubCompat.OnInflateListener>;
						/**
						 * Constructs a new instance of the android.support.v7.widget.ViewStubCompat$OnInflateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onInflate(param0: android.support.v7.widget.ViewStubCompat, param1: android.view.View): void });
						public constructor();
						public onInflate(param0: android.support.v7.widget.ViewStubCompat, param1: android.view.View): void;
					}
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class ViewUtils {
					public static class: java.lang.Class<android.support.v7.widget.ViewUtils>;
					public static makeOptionalFitsSystemWindows(param0: android.view.View): void;
					public static isLayoutRtl(param0: android.view.View): boolean;
					public static computeFitSystemWindows(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Rect): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class WithHint {
					public static class: java.lang.Class<android.support.v7.widget.WithHint>;
					/**
					 * Constructs a new instance of the android.support.v7.widget.WithHint interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { getHint(): string });
					public constructor();
					public getHint(): string;
				}
			}
		}
	}
}

//Generics information:
//android.support.v7.view.menu.BaseMenuWrapper:1
//android.support.v7.view.menu.BaseWrapper:1

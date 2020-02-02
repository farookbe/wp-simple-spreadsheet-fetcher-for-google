import { AdvancedRangeControl } from "../advanced-range-control";
import { AdvancedPopOverControl } from "../advanced-popover-control";
import { AdvancedSelectControl } from "../advanced-select-control";
import { AdvancedButtonGruopControl } from "../advanced-button-group-control";
import { AdvancedColorPalleteControl } from "../advanced-color-pallete-control";
import { borderStyle } from "../border-style";

const { __ } = wp.i18n;
const { Fragment } = wp.element;

export const BorderControl = props => {
	const render = (
		<Fragment>
			<AdvancedSelectControl
				label={__("Style", "wp-simple-spreadsheet-fetcher-for-google")}
				schemaName={"borderStyle"}
				initial={props.attributes.borderStyle}
				data={borderStyle}
				{...props}
			/>
			<h3>{__("Color", "wp-simple-spreadsheet-fetcher-for-google")}</h3>
			<AdvancedColorPalleteControl
				schemaName={"borderColor"}
				{...props}
			/>
			<AdvancedButtonGruopControl
				schemaName={"borderUnit"}
				initial={props.attributes.borderUnit}
				data={["px", "em", "rem"]}
				{...props}
			/>
			<AdvancedRangeControl
				label={__("Width", "wp-simple-spreadsheet-fetcher-for-google")}
				schemaName={"borderWidth"}
				initial={props.attributes.borderWidth}
				{...props}
			/>
			<h3>{__("Layout", "wp-simple-spreadsheet-fetcher-for-google")}</h3>
			<AdvancedButtonGruopControl
				schemaName={"borderPosition"}
				initial={props.attributes.borderPosition}
				data={["full", "vertical-line", "horizontal-line", "none"]}
				{...props}
			/>
		</Fragment>
	);
	return (
		<AdvancedPopOverControl
			label={__("Border", "wp-simple-spreadsheet-fetcher-for-google")}
			schemaName={"isVisible"}
			initial={props.attributes.isVisible}
			render={render}
			{...props}
		/>
	);
};
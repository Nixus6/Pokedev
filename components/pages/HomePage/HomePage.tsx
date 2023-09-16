import TemplateHomeIn from "@/components/templates/TemplateHomeIn/TemplateHomeIn";
import ItemList from "@/components/ui/organisms/ItemList/ItemList";

const HomePage = (): JSX.Element => {
    return (
      <TemplateHomeIn >
        <ItemList
        //   list={pokemonList}
        //   titleKey="name"
        //   imgSrcKey={IMG_URL_KEY}
        //   imgAltKey={IMG_ALT_KEY}
        //   linkPathKey={LINK_PATH_KEY}
        />
      </TemplateHomeIn>
    );
  };
  
  export default HomePage;
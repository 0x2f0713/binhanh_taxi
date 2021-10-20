import 'package:binhanh_taxi/blocs/car/car_bloc.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:material_floating_search_bar/material_floating_search_bar.dart';

class SearchView extends StatelessWidget {
  const SearchView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final isPortrait =
        MediaQuery.of(context).orientation == Orientation.portrait;
    return BlocListener<CarBloc, CarState>(
      listener: (context, state) {
        // ignore: todo
        // TODO: implement listener
      },
      child: FloatingSearchBar(
        hint: 'Tìm xe...',
        // scrollPadding: const EdgeInsets.only(top: 16, bottom: 56),
        transitionDuration: const Duration(milliseconds: 300),
        transitionCurve: Curves.easeInOut,
        physics: const BouncingScrollPhysics(),
        // axisAlignment: isPortrait ? 0.0 : -1.0,
        openAxisAlignment: 0.0,
        width: isPortrait ? 600 : 500,
        debounceDelay: const Duration(milliseconds: 500),
        onQueryChanged: (query) {
          // Call your model, bloc, controller here.
          context.read<CarBloc>().add(CarSearch(query: query));
        },
        // Specify a custom transition to be used for
        // animating between opened and closed stated.
        transition: ExpandingFloatingSearchBarTransition(),
        actions: [
          FloatingSearchBarAction(
            showIfOpened: false,
            child: CircularButton(
              icon: const Icon(Icons.local_taxi),
              onPressed: () {},
            ),
          ),
          FloatingSearchBarAction.searchToClear(
            showIfClosed: false,
          ),
        ],
        builder: (context, transition) {
          return BlocBuilder<CarBloc, CarState>(
            builder: (context, state) {
              if (state is CarSearchResult) {
                return FloatingSearchBarScrollNotifier(
                  child: ListView.builder(
                    shrinkWrap: true,
                    physics: const NeverScrollableScrollPhysics(),
                    itemCount: state.result.length,
                    itemBuilder: (context, index) {
                      return ListTile(
                        title: Text(
                          state.result[index].displayText,
                        ),
                      );
                    },
                  ),
                );
              } else {
                return const Center(child: Text("Type something..."));
              }
            },
          );
        },
      ),
    );
  }
}
